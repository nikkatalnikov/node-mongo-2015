/*eslint-env commonjs*/
"use strict";

var Backbone = require('backbone');
var template = require('./partials/signup.html');

var SignUpView = Backbone.View.extend({
    render: function() {
        this.$el.html(template);
        return this;
    }
});

module.exports = SignUpView;