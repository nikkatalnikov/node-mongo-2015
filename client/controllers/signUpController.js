/*eslint-env commonjs, browser*/
/*eslint no-console: 0*/
"use strict";

var inherit = require('inherit');
var $ = require('jquery');
var toastr = require('toastr');
var SignUpView = require('../views/signupView');
var UIController = require('./UIController');

var SignUpController = inherit(UIController, {
    __constructor: function(options) {
        UIController.prototype.__constructor.call(this, options);
        this.view = new SignUpView();
    },
    run: function () {
        this.switchSection(this.view);
        var self = this;
        var form = $('form');
        form.submit(function() {
            Promise
                .resolve($.post("/signup", form.serialize()))
                .then(function(result) {
                    localStorage.setItem('chatToken', result.token);
                    self.onSuccess('/chat');
                })
                .catch(function() {
                    toastr.error("User already exists");
                    self.onError('/signup');
                });
        });
    }
});

module.exports = SignUpController;