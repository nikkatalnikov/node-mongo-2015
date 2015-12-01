"use strict";

const Backbone = require('backbone');
const $ = require('jquery');
const LoginController = require('./controllers/loginController');
const HomeController = require('./controllers/homeController');
const SignUpController = require('./controllers/signUpController');
const LogoutController = require('./controllers/logoutController');
const ChatController = require('./controllers/chatController');

class Router extends Backbone.Router {
    constructor () {
        super();
    }
    run () {
        this.routes = {
            '': 'index',
            'login': 'login',
            'logout': 'logout',
            'signup': 'signup',
            'chat': 'chat'
        };
        this.container = $('#container');
        this._bindRoutes();
    }
    index (){
        let contoller = new HomeController({
            router: this,
            container: this.container
        });
        contoller.run();
    }
    login () {
        let contoller = new LoginController({
            router: this,
            container: this.container
        });
        contoller.run();
    }
    signup () {
        let contoller = new SignUpController({
            router: this,
            container: this.container
        });
        contoller.run();
    }
    logout () {
        let contoller = new LogoutController({
            router: this,
            container: this.container
        });
        contoller.run();
    }
    chat () {
        let contoller = new ChatController({
            router: this,
            container: this.container
        });
        contoller.run();
    }
}

module.exports = Router;