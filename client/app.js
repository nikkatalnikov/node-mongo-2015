/*eslint-env browser, commonjs*/
"use strict";

var $ = require('jquery');
var Router = require('./router');

(function() {
    var router = new Router();
    router.run();

    $.ajaxSetup({
        beforeSend: function(xhr) {
            var token = localStorage.getItem('chatToken');
            if (token) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + token);
            }
        }
    });
}());