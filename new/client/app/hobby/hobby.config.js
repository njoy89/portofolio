/**
 * Copyright (c) 2015, Grzegorz Swatowski
 */

'use strict';

angular.module('portofolio.hobby', []).
  config(/*@ngInject*/($stateProvider) => {
    $stateProvider.
      state('portofolio.hobby', {
        'url': '/hobby',
        'templateUrl': 'hobby/hobby.tmpl.html'
      });
  });