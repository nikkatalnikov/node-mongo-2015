"use strict";

var express = require('express');
var router = express.Router();
var User = require('../model/user');
var createToken = require('../services').createToken;

router.post('/',
    function(req, res) {
        User
            .findOne({username: req.body.username})
            .then(function(user){
                if (user) {
                    res.sendStatus(409);
                } else {
                    var userModel = new User({
                        username: req.body.username,
                        password: req.body.password
                    });

                    userModel
                        .save()
                        .then(function(user){
                            var token = createToken(user);
                            res.send({
                                username: user.username,
                                token: token
                            });
                        });
                }
            })
            .catch(function(){
                res.sendStatus(500);
            });
        });

module.exports = router;