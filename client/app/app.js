/**
 * Copyright (c) 2015, Grzegorz Swatowski
 */

'use strict';

let ngModule = angular.module('portofolio', [
  'ui.router',
  'ui.bootstrap',
  'portofolio.home',
  'portofolio.experience',
  'portofolio.projects',
  'portofolio.hobby',
  'portofolio.contact',
  'portofolio.partials',
  'portofolio.navigationPanel',
  'portofolio.common'
]);

ngModule.config(/*@ngInject*/($stateProvider, $urlRouterProvider) => {
    $stateProvider.state('portofolio', {
        abstract: true,
        template: '<div ui-view class="animated fadeIn"/>'
    });

    $urlRouterProvider.otherwise('/');
});