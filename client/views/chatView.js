"use strict";

const Backbone = require('backbone');
const template = require('./partials/chat.html');
const _ = require('lodash');

class ChatView extends Backbone.View {
    constructor(options) {
        super();
        this.template = _.template(template);
        this.user = options.user;
    }
    render() {
        this.$el.html(this.template({user: this.user}));
        return this;
    }
}

module.exports = ChatView;