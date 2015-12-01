"use strict";

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jwt = require('express-jwt');
var config  = require('./config');
var socketio = require('socket.io');
var moment = require('moment');

var chat = require('./routes/chat');
var login = require('./routes/login');
var logout = require('./routes/logout');
var signup = require('./routes/signup');
var isRevokedCallback = require('./services').isRevokedCallback;

var people = {};
var app = express();

var io = socketio();
app.io = io;

mongoose.connect('mongodb://localhost/test');
mongoose.Promise = require('bluebird');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'client'), { redirect: false }));

app.use(jwt({ secret: config.secret, isRevoked: isRevokedCallback }).unless({path: ['/', '/login', '/signup', '/favicon.ico']}));

app.get('/', function(req, res) {
    res.sendFile('index.html');
});

app.use('/login', login);
app.use('/logout', logout);
app.use('/signup', signup);
app.use('/chat', chat);

io.on('connection', function(client){

    client.on('join', function(name){
        people[client.id] = name;
        io.emit('update', name + ' has joined chat.');
    });

    client.on('send', function(msg){
        var name = people[client.id];
        var date = moment().format('lll');
        io.emit('chat', name + ' wrote at ' + date + ':', msg);
    });

    client.on('disconnect', function(){
        var name = people[client.id];
        io.emit('update', name + ' has left chat.');
        delete people[client.id];
    });

});

app.use(function (err, req, res) {
    if (err.name === 'UnauthorizedError') {
        if (req.url === '/chat') {
            res.sendStatus(401);
        } else {
            res.redirect('/');
        }
    }
});

module.exports = app;