"use strict";

const _ = require('lodash');
const io = require('socket.io-client');
const $ = require('jquery');
const UserModel = require('../models/UserModel');
const ChatView = require('../views/chatView');
const UIController = require('./UIController');

class ChatController extends UIController {
    constructor(options) {
        super(options);
        this.model = new UserModel();
    }
    run () {
        let modelPromise = this.fetchModel(this.model);
            modelPromise.then(() => {
                let user = this.model.get('user');
                let view = new ChatView({user});
                this.switchSection(view);

                let socket = io();
                socket.emit('join', user);

                let $chat = $('#chat');
                let $messages =  $('#messages');
                let form = $('form');

                form.submit(() => {
                    let text =  $chat.val();
                    socket.emit('send', text);
                    $chat.val('');
                    return false;
                });

                socket.on('chat',(info, text) => {
                    $messages
                        .append($('<div>').text(info))
                        .append($('<b>').text(text));
                });

                socket.on('update', (info) => {
                    $messages
                        .append($('<div>').text(info));
                });
            })
            .catch(() => this.onError('/login', _.noop));
    }

}

module.exports = ChatController;
