"use strict";

const Backbone = require('backbone');

class UserModel extends Backbone.Model {
    constructor() {
        super();
        this.url = '/chat';
    }
}

module.exports = UserModel;