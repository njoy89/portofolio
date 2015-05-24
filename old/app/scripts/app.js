'use strict';

angular.module('portofolioApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate',
    'firebase',
    'angularSpinner'
])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/experience', {
                templateUrl: 'views/experience/index.html',
                controller: 'ExperienceCtrl'
            })
            .when('/projects', {
                templateUrl: 'views/projects.html',
                controller: 'ProjectsCtrl'
            })
            .when('/resources', {
                templateUrl: 'views/resources.html',
                controller: 'ResourcesCtrl'
            })
            .when('/hobby', {
                templateUrl: 'views/hobby.html',
                controller: 'HobbyCtrl'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'ContactCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }).
    run(function($rootScope, $location) {
        _.extend(
            $rootScope,
            {
                partialIsActive: function(viewLocation) {
                    return viewLocation === $location.path();
                },
                loadedData: true
            }
        );
    });
