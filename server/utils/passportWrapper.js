'use strict';

const passport = require('passport');
const Strategy = require('passport-http-bearer').Strategy;
const userModel = require('../models').users;
const jwt = require('jsonwebtoken');

var passportHandle = passport.use(new Strategy(
    function(token, cb, user) {
        jwt.verify(token, 'shhhhh', function (err, decoded) {
            if (!decoded) {
                return cb(null, false);
            }
            userModel.findById(decoded.id).then(function(user) {
                //if (err) { return cb(err); }
                if (!user) { return cb(null, false); }
                return cb(null, user);
            });
        })
    }));

module.exports = passportHandle;

