"use strict";

const Backbone = require('backbone');
const template = require('./partials/home.html');

class HomeView extends Backbone.View {
    constructor() {
        super();
    }
    render (){
        this.$el.html(template);
        return this;
    }
}

module.exports = HomeView;