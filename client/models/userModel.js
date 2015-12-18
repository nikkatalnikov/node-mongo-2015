/*eslint-env commonjs*/
"use strict";

var Backbone = require('backbone');
var CHAT_URL = '/chat';

var UserModel = Backbone.Model.extend({
    url: CHAT_URL
});

module.exports = UserModel;