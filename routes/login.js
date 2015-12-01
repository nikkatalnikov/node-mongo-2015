"use strict";

var express = require('express');
var router = express.Router();
var User = require('../model/user');
var createToken = require('../services').createToken;

router.post('/', function(req, res) {
    User
        .findOne({username: req.body.username, password: req.body.password})
        .then(function(user) {
            var token = createToken(user);
            res.send({
                username: user.username,
                token: token
            });

        }).catch(function(err){
            res.sendStatus(400);
        });
});

module.exports = router;