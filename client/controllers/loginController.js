"use strict";

const _ = require('lodash');
const $ = require('jquery');
const toastr = require('toastr');
const LoginView = require('../views/loginView');
const UIController = require('./UIController');

class LoginController extends UIController {
    constructor(options) {
        super(options);
        this.view = new LoginView();
    }
    run () {
        this.switchSection(this.view);
        let form = $('form');
        form.submit(() => {
            Promise
                .resolve($.post("/login", form.serialize()))
                .then((result) => {
                    localStorage.setItem('chatToken', result.token);
                    this.onSuccess('/chat');
                })
                .catch(() => {
                    toastr.error("Wrong credentials");
                    this.onError('/login');
                });
        });
    }
}

module.exports = LoginController;