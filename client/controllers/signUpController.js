"use strict";

const _ = require('lodash');
const $ = require('jquery');
const toastr = require('toastr');
const SignUpView = require('../views/signupView');
const UIController = require('./UIController');

class SignUpController extends UIController {
    constructor(options) {
        super(options);
        this.view = new SignUpView();
    }
    run () {
        this.switchSection(this.view);
        let form = $('form');
        form.submit(() => {
            Promise
                .resolve($.post("/signup", form.serialize()))
                .then((result) => {
                    localStorage.setItem('chatToken', result.token);
                    this.onSuccess('/chat');
                })
                .catch(() => {
                    toastr.error("User already exists");
                    this.onError('/signup');
                });
        });
    }
}

module.exports = SignUpController;