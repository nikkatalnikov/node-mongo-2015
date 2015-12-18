/*eslint-env commonjs*/
"use strict";

var HomeView = require('../views/homeView');
var UIController = require('./UIController');
var inherit = require('inherit');

var HomeController = inherit(UIController, {
    __constructor: function(options) {
        UIController.prototype.__constructor.call(this, options);
        this.view = new HomeView();
    },
    run: function () {
        this.switchSection(this.view);
    }
});

module.exports = HomeController;