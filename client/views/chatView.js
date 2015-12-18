/*eslint-env commonjs*/
"use strict";

var Backbone = require('backbone');
var template = require('./partials/chat.html');
var _ = require('lodash');

var ChatView = Backbone.View.extend ({
    initialize: function(options) {
        this.template = _.template(template);
        this.user = options.user;
    },
    render: function() {
        this.$el.html(this.template({user: this.user}));
        return this;
    }
});

module.exports = ChatView;