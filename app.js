'use strict';

const app = require('./server/api');
const config = require('./config');
const rConcole = require('./server/utils/logger');
const http = require('http');
const sequelize = require('./server/utils/sequelize');

let info = `info, web server is available at http://%s:%s, ${config.server.host}, ${config.server.port}`;


// let server = app.listen(config.server.port,
//                         config.server.host,
//                         () => console.log(info));

sequelize.sync()
    .then(() => {
        app.listen(config.server.port, config.server.host, () => console.log(info));
    })
    .catch((err) => {
        throw Error(err);
    });

module.exports = app;