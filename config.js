'use strict';

let env = process.env.NODE_ENV || 'dev';

const config = {
    env: env,
    server: {
        host: process.env.HOST || '0.0.0.0',
        port: process.env.PORT || '5500',
        baseURL: 'http://127.0.0.1:5500'
    }
};

module.exports = config;