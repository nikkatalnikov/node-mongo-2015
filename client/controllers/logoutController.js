"use strict";

const $ = require('jquery');
const UIController = require('./UIController');

class LogoutController extends UIController {
    constructor(options) {
        super(options);
    }
    run () {
        Promise
            .resolve($.post('/logout'))
            .then(() => {
                localStorage.removeItem('chatToken');
                this.onSuccess('/');
            })
            .catch(() => {
                localStorage.removeItem('chatToken');
                this.onError('/login');
            });
    }
}

module.exports = LogoutController;