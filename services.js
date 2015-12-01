"use strict";

var _ = require('lodash');
var jwt = require("jsonwebtoken");
var config  = require('./config');
var Blacklist = require('./model/blacklist');

module.exports = {
    createToken: createToken,
    isRevokedCallback: isRevokedCallback,
    parseTokenData: parseTokenData
};

function createToken(user) {
    return jwt.sign(_.omit(user, 'password'), config.secret);
}

function parseTokenData (req) {
    var token = req.header('Authorization').split(' ')[1];
    return jwt.decode(token);
}

function isRevokedCallback(req, payload, next) {
    var token = req.header('Authorization').split(' ')[1];
    Blacklist
        .find({token: token})
        .then(function(result) {
            return result.token ? next(null, true) : next(null, false);
        })
        .catch(function() {
            return next(null, false);
        });
}
