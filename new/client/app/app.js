/**
 * Copyright (c) 2015, Grzegorz Swatowski
 */

'use strict';

let ngModule = angular.module('portofolio', [
  'ui.router',
  'ui.bootstrap',
  'portofolio.home'
   //'portofolio.experience',
   //'portofolio.projects',
   //'portofolio.hobby'
]);

ngModule.config(/*@ngInject*/($stateProvider, $urlRouterProvider) => {
    $stateProvider.state('portofolio', {
        abstract: true,
        template: '<div ui-view/>'
    });

    $urlRouterProvider.otherwise('/');
});