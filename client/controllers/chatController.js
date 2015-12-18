/*eslint-env commonjs, browser*/
/*eslint no-console: 0*/
"use strict";

var _ = require('lodash');
var inherit = require('inherit');
var io = require('socket.io-client');
var $ = require('jquery');
var UserModel = require('../models/UserModel');
var ChatView = require('../views/chatView');
var UIController = require('./UIController');

var ChatController = inherit(UIController, {
    __constructor: function(options) {
        UIController.prototype.__constructor.call(this, options);
        this.model = new UserModel();
    },
    run: function() {
        var self = this;
        var modelPromise = this.fetchModel(this.model);
            modelPromise.then(function() {
                var user = self.model.get('user');
                var view = new ChatView({user: user});
                self.switchSection(view);

                var socket = io();
                socket.emit('join', user);

                var $chat = $('#chat');
                var $messages =  $('#messages');
                var form = $('form');

                form.submit(function() {
                    socket.emit('send', $chat.val());
                    $chat.val('');
                    return false;
                });

                socket.on('chat', function(info, text) {
                    $messages
                        .append($('<div>').text(info))
                        .append($('<b>').text(text));
                });

                socket.on('update', function(info) {
                    $messages
                        .append($('<div>').text(info));
                });
            })
            .catch(function() {
                self.onError('/login', _.noop);
            });
    }
});

module.exports = ChatController;
