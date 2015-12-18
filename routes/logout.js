/*eslint-env node*/
"use strict";

var express = require('express');
var router = express.Router();
var Blacklist = require('../model/blacklist');

router.post('/', function(req, res) {
    var token = req.header('Authorization').split(' ')[1];

    var BlacklistModel = new Blacklist({
        token: token
    });

    BlacklistModel
        .save()
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function(){
            res.sendStatus(401);
        });
});

module.exports = router;