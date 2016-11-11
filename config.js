'use strict';

let env = process.env.NODE_ENV || 'dev';
const db = require('./database.json');

const config = {
    env: env,
    server: {
        host: process.env.HOST || '0.0.0.0',
        port: process.env.PORT || '5500',
        baseURL: 'http://127.0.0.1:5500'
    },
    db: {
        host: process.env.DB_HOST || db[env].host,
        port: parseInt(process.env.DB_PORT) || 3306,
        dbname: process.env.DB_NAME || db[env].database,
        user: process.env.DB_USER || db[env].user,
        password: process.env.DB_PASSWORD ||  db[env].password,
        charset: 'utf8mb4',
        connectionRetryCount: 5,
        delayBeforeReconnect: 3000,
        showErrors: true
    }
};

module.exports = config;