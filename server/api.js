'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const urlManager = require('./routes');
const cors = require('cors');
const errorHandler = require('./utils/errorHandler');
const disallowMethods = require('./utils/methodsHandler');
const requestHandler = require('./utils/requestHandler');
const errorFormatter = require('./utils/errorFormatter');
const config = require('../config');
const passport = require('passport');

//initialize the app
const app = module.exports = express();
app.use(cors());
//set up static files directory
app.use(requestHandler);
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.raw({limit: '50mb'}));

app.use(passport.initialize());
// app.use(passport.session());

urlManager(app);

//format errors
app.use(errorFormatter(app));
//set up http error handler
app.use(errorHandler(app));

disallowMethods(app);

process.on('uncaughtException', function (err, req, res) {
    console.log(err.stack);
});

process.on('SIGINT', function() {
    // calling shutdown allows your process to exit normally
    process.exit();
});