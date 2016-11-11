'use strict';

let generateToken;

class AuthController {
    constructor(token) {
        this.token = [this._getToken.bind(this)];
        this.smth = [this._doSmth.bind(this)];
    }
    _getToken(req, res, next) {
        return res.send('1234');
    }
    _getUser(req, res, next) {
        let body = req.body;
        return res.send({
            token: generateToken('1234')
        });
    }
    _doSmth(req, res, next) {
        return res.send({
            smth: 'smth'
        })
    }
}

generateToken = (token) => {
    return token;
};

module.exports = AuthController;