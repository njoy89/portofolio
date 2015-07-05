/**
 * Copyright (c) 2015, Grzegorz Swatowski
 */

'use strict';

angular.module('portofolio.common').
  directive('activeItem', () => {
    return {
      restrict: 'A',
      link: (scope, element, attr) => {
        element.on('click', () => {
          $(element).siblings().removeClass('active');
          element.addClass('active');
        });
      }
    };
  });