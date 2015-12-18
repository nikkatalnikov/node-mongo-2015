/*eslint-env commonjs*/
"use strict";

var inherit = require('inherit');
var Promise = require('bluebird');

var UIController  = inherit({
    __constructor: function(options) {
        this.router = options.router;
        this.container = options.container;
    },
    switchSection: function (view) {
        this.container.empty().append(view.render().$el);
    },
    fetchModel: function (model) {
        return Promise.resolve(model.fetch());
    },
    onError: function (route) {
        this.router.navigate(route, {trigger: true});
    },
    onSuccess: function (route) {
        this.router.navigate(route, {trigger: true});
    }
});

module.exports = UIController;