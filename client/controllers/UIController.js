"use strict";

const _ = require('lodash');
const Promise = require('bluebird');

class UIController {
    constructor(options) {
        this.router = options.router;
        this.container = options.container;
    }
    switchSection (view) {
        this.container.empty().append(view.render().$el);
    }
    fetchModel (model) {
        return Promise.resolve(model.fetch());
    }
    onError (route) {
        this.router.navigate(route, {trigger: true});
    }
    onSuccess (route) {
        this.router.navigate(route, {trigger: true});
    }
}

module.exports = UIController;