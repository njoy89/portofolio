/**
 * Copyright (c) 2015, Grzegorz Swatowski
 */

'use strict';

angular.module('portofolio.navigationPanel').
  directive('navigationPanel', () => {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'navigation-panel/navigation-panel.tmpl.html'
    };
  });