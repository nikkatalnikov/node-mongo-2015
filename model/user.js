"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserS = new Schema({
    username: String,
    password: String
});

module.exports = mongoose.model('User', UserS);