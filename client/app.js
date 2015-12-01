"use strict";

const Backbone = require('backbone');
const $ = require('jquery');

let Router = require('./router');

(() => {
    let router = new Router();
    router.run();
    Backbone.history.start();

    $.ajaxSetup({
        beforeSend: (xhr) => {
            let token = localStorage.getItem('chatToken');
            if (token) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + token);
            }
        }
    });
})();