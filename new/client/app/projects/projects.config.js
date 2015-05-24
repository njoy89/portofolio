/**
 * Copyright (c) 2015, Grzegorz Swatowski
 */

'use strict';

angular.module('portofolio.projects', []).
  config(/*@ngInject*/($stateProvider) => {
    $stateProvider.
      state('portofolio.projects', {
        'url': '/projects',
        'templateUrl': 'projects/projects.tmpl.html'
      });
  });