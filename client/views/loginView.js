/*eslint-env commonjs*/
"use strict";

var Backbone = require('backbone');
var template = require('./partials/login.html');

var LoginView = Backbone.View.extend({
    render: function() {
        this.$el.html(template);
        return this;
    }
});

module.exports = LoginView;