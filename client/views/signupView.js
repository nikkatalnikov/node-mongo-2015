"use strict";

const Backbone = require('backbone');
const template = require('./partials/signup.html');

class SignUpView extends Backbone.View {
    constructor() {
        super();
    }
    render (){
        this.$el.html(template);
        return this;
    }
}

module.exports = SignUpView;