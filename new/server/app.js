/**
 * Copyright (c) 2015, Grzegorz Swatowski
 */

'use strict';

let config = require('./../config.json');

let express = require('express');
let path = require('path');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

let routes = require('./routes/index');
let app = express();
let http = require('http').Server(app);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('[:date[clf]] :method :url :status :response-time ms - :res[content-length] bytes'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

/*
 * serves static files
 */
app.use(express.static(path.join(__dirname, './../' + config.files.build.path)));

//app.use('/', routes);

/*
 * HTTP 404 and forward to error handler
 */
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/*
 * development error handler
 * will print stacktrace
 */
if (config.mode === 'dev') {
  app.use((err, req, res) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

/*
 * production error handler
 * no stacktraces leaked to user
 */
app.use((err, req, res) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

/*
 * runs the server
 */
console.log('Running the server on the address: ' + config.host + ':' + config.port + '/');

http.listen(config.port);

module.exports = app;