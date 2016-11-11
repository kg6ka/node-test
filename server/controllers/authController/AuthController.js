'use strict';

const models = require('./../../models');
const jwt = require('jsonwebtoken');

//return jwt.sign(data, JWT_KEY, {expiresIn: time}, callback);

let generateToken;

class AuthController {
    constructor(token) {
        this.token = [this._getToken.bind(this)];
        this.smth = [this._doSmth.bind(this)];
        this.create = [this._createUser.bind(this)];
    }
    _getToken(req, res, next) {
        return res.send('1234');
    }
    _doSmth(req, res, next) {
        return res.send({
            smth: 'smth'
        })
    }
    _getUser(req, res, next) {
        let id = req.params.id;
        models.user.findById(id)
            .then(function(result) {
                return res.send(result)
            })
            .catch(function(err) {
                return next(err);
            });
    }
    _createUser(req, res, next) {
        let params = req.body;
        let token = jwt.sign(params, '123');
        models.user.create(params)
            .then(function (user) {
                req.result = user;
                return res.send(token)
            })
            .catch(function (err) {
                return next(err);
            });
    }
}

generateToken = (token) => {
    return token;
};

module.exports = AuthController;