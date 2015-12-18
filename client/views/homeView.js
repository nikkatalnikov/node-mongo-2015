/*eslint-env commonjs*/
"use strict";

var Backbone = require('backbone');
var template = require('./partials/home.html');

var HomeView = Backbone.View.extend({
    render: function() {
        this.$el.html(template);
        return this;
    }
});

module.exports = HomeView;