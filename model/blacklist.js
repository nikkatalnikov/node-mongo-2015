"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BlacklistS = new Schema({
    token: String
});

module.exports = mongoose.model('Blacklist', BlacklistS);