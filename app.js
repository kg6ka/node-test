'use strict';

const app = require('./server/api');
const config = require('./config');
const rConcole = require('./server/utils/logger');
const http = require('http');

let info = `info, web server is available at http://%s:%s, ${config.server.host}, ${config.server.port}`;

if(config.env === 'dev') {
    let server = app.listen(config.server.port,
                            config.server.host,
                            () => console.log(info));
}

module.exports = app;