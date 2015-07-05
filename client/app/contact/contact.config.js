/**
 * Copyright (c) 2015, Grzegorz Swatowski
 */

'use strict';

angular.module('portofolio.contact', []).
  config(/*@ngInject*/($stateProvider) => {
    $stateProvider.
      state('portofolio.contact', {
        'url': '/contact',
        'templateUrl': 'contact/contact.tmpl.html'
      });
  });