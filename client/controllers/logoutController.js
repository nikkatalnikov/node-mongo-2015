/*eslint-env commonjs, browser*/
/*eslint no-console: 0*/
"use strict";

var $ = require('jquery');
var inherit = require('inherit');
var UIController = require('./UIController');

var LogoutController = inherit(UIController, {
    __constructor: function(options) {
        UIController.prototype.__constructor.call(this, options);
    },
    run: function() {
        var self = this;
        Promise
            .resolve($.post('/logout'))
            .then(function() {
                localStorage.removeItem('chatToken');
                self.onSuccess('/');
            })
            .catch(function() {
                localStorage.removeItem('chatToken');
                self.onError('/login');
            });
    }
});

module.exports = LogoutController;