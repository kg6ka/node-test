'use strict';

const AuthController = require('./AuthController');

let auth = new AuthController();

module.exports = {
    getToken: auth.token,
    getUser: auth._getUser,
    doSmth: auth.smth,
    create: auth.create
};