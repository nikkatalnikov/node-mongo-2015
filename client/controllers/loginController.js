/*eslint-env commonjs, browser*/
/*eslint no-console: 0*/
"use strict";

var $ = require('jquery');
var inherit = require('inherit');
var toastr = require('toastr');
var LoginView = require('../views/loginView');
var UIController = require('./UIController');

var LoginController = inherit(UIController, {
    __constructor: function(options) {
        UIController.prototype.__constructor.call(this, options);
        this.view = new LoginView();
    },
    run: function() {
        this.switchSection(this.view);
        var self = this;
        var form = $('form');
        form.submit(function() {
            Promise
                .resolve($.post("/login", form.serialize()))
                .then(function(result) {
                    localStorage.setItem('chatToken', result.token);
                    self.onSuccess('/chat');
                })
                .catch(function() {
                    toastr.error("Wrong credentials");
                    self.onError('/login');
                });
        });
    }
});

module.exports = LoginController;