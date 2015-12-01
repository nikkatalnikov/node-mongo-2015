"use strict";

const Backbone = require('backbone');
const template = require('./partials/login.html');

class LoginView extends Backbone.View {
    constructor() {
        super();
    }
    render (){
        this.$el.html(template);
        return this;
    }
}

module.exports = LoginView;