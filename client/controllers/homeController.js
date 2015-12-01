"use strict";

const HomeView = require('../views/homeView');
const UIController = require('./UIController');

class HomeController extends UIController {
    constructor(options) {
        super(options);
        this.view = new HomeView();
    }
    run () {
        this.switchSection(this.view);
    }
}

module.exports = HomeController;