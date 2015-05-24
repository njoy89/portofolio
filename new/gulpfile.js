/**
 * Copyright (c) 2015, Grzegorz Swatowski
 */

'use strict';

var config = require('./config.json');

var gulp = require('gulp');
var gulpRunSequence = require('run-sequence');
var plugins = require('gulp-load-plugins')({ lazy: false });

var devMode = (config.mode === 'dev');

require('jshint-stylish');

gulp.task('nodemon', function () {
  return plugins.nodemon({
    execMap: {
      'js': 'node --harmony'
    },
    script: config.files.server.path + config.files.server.app,
    verbose: true,
    watch: [
      config.files.server.path,
      './config.json'
    ]
  });
});

gulp.task('jshint', function () {
  return gulp.src([
    config.files.server.path + config.files.server.js,
    config.files.client.path + config.files.client.js,
    './gulpfile.js'
  ]).
    pipe(plugins.jshint()).
    pipe(plugins.jshint.reporter('jshint-stylish')).
    pipe(plugins.jshint.reporter('fail'));
});

gulp.task('clean', function () {
  return gulp.src([ config.files.build.path ], { read: false }).
    pipe(plugins.clean({force: true}));
});

gulp.task('fonts', function () {
  return gulp.src(config.libs[config.mode].fonts).
    pipe(gulp.dest(config.files.build.path + config.files.build.fonts));
});

gulp.task('html:partials', function () {
  return gulp.src(config.files.client.path + config.files.client.html).
    pipe(plugins.ngHtml2js({
      moduleName: 'Portofolio.partials'
    })).
    pipe(plugins.concat(config.files.build.js + config.files.build.bundle.partials)).
    pipe(devMode ? plugins.util.noop() : plugins.uglify()).
    pipe(gulp.dest(config.files.build.path));
});

gulp.task('html:static', function () {
  return gulp.src([
    config.files.client.path + 'index.html'
  ]).
    pipe(gulp.dest(config.files.build.path));
});

gulp.task('libs:js', function () {
  return gulp.src(config.libs[config.mode].js).
    pipe(plugins.concat(config.files.build.bundle.libsjs)).
    pipe(devMode ? plugins.util.noop() : plugins.uglify()).
    pipe(gulp.dest(config.files.build.path + config.files.build.js));
});

gulp.task('libs:css', function () {
  return gulp.src(config.libs[config.mode].css).
    pipe(plugins.concat(config.files.build.bundle.libscss)).
    pipe(plugins.minifyCss({
      keepSpecialComments: 0
    })).
    pipe(gulp.dest(config.files.build.path + config.files.build.css));
});

gulp.task('app:js', function () {
  return gulp.src(config.files.client.path + config.files.client.js).
    pipe(plugins.concat(config.files.build.bundle.appjs)).
    pipe(plugins.babel()).
    pipe(plugins.ngAnnotate({
      add: true,
      // jshint -W106
      single_quotes: true
    })).
    pipe(gulp.dest(config.files.build.path + config.files.build.js));
});

gulp.task('build', ['clean'], function () {
  return gulpRunSequence(['fonts', 'html:partials', 'html:static', 'libs:js', 'libs:css', 'app:js']);
});

gulp.task('start', function () {
  if (devMode) {
    return gulpRunSequence('jshint', ['nodemon', 'build']);
  } else {
    return gulpRunSequence('jshint', ['build']);
  }
});

gulp.task('default', function () {
  plugins.util.log(plugins.util.colors.red('Please select task to run.'));
  plugins.util.log('');
  plugins.util.log(plugins.util.colors.red('Make sure the config file (./config.js) is filled in correctly!'));
});