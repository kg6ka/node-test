'use strict';

const controllers = require('../controllers');
// const passport = require('../utils/passportWrapper');

module.exports = (app) => {
    //static links
    console.log('routes run');
    app.get('/', controllers.static.get.index);
    app.get('/api/auth', controllers.auth.getToken);
    app.post('/api/user', controllers.auth.getUser);
    app.post('/api/smth', controllers.auth.doSmth);
};