/**
 * Copyright (c) 2015, Grzegorz Swatowski
 */

'use strict';

angular.module('portofolio.experience', []).
  config(/*@ngInject*/($stateProvider) => {
    $stateProvider.
      state('portofolio.experience', {
        'url': '/experience',
        'templateUrl': 'experience/experience.tmpl.html',
        'controller': 'ExperienceCtrl',
        'controllerAs': 'experience',
        'resolve': {
          'experience': /*@ngInject*/($http) => {
            return $http.get('/experience').
              then((response) => JSON.parse(response.data)).
              catch(() => {
                // TODO
              });
          }
        }
      });
  });