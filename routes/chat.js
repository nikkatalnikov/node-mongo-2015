/*eslint-env node*/
"use strict";

var express = require('express');
var router = express.Router();
var parseTokenData = require('../services').parseTokenData;

router.get('/', function(req, res) {
    var user = parseTokenData(req);
    res.send({user: user.username});
});

module.exports = router;