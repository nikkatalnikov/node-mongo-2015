/*eslint-env commonjs*/
"use strict";

var Backbone = require('backbone');
var $ = require('jquery');
var LoginController = require('./controllers/loginController');
var HomeController = require('./controllers/homeController');
var SignUpController = require('./controllers/signUpController');
var LogoutController = require('./controllers/logoutController');
var ChatController = require('./controllers/chatController');

var Router = Backbone.Router.extend({
    routes: {
        '': 'index',
        'login': 'login',
        'logout': 'logout',
        'signup': 'signup',
        'chat': 'chat'
    },

    initialize: function() {
        this.container = $('#container');
    },

    run: function() {
        Backbone.history.start();
    },

    index: function() {
        var controller = new HomeController({
            router: this,
            container: this.container
        });
        controller.run();
    },
    login: function() {
        var controller = new LoginController({
            router: this,
            container: this.container
        });
        controller.run();
    },

    signup: function() {
        var controller = new SignUpController({
            router: this,
            container: this.container
        });
        controller.run();
    },

    logout: function () {
        var controller = new LogoutController({
            router: this,
            container: this.container
        });
        controller.run();
    },

    chat: function () {
        var controller = new ChatController({
            router: this,
            container: this.container
        });
        controller.run();
    }
});

module.exports = Router;