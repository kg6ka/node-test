'use strict';

const controllers = require('../controllers');
const passport = require('../utils/passportWrapper');

module.exports = (app) => {
    //static links
    app.post('/api/users', controllers.auth.create);
    app.get('/api/auth', controllers.auth.getToken);
    app.use(passport.authenticate('bearer', { session: false }));
    app.get('/', controllers.static.get.index);
    app.get('/api/user/:id', controllers.auth.getUser);
    app.post('/api/smth', controllers.auth.doSmth);
};