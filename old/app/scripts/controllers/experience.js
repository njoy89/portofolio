'use strict';

angular.module('portofolioApp')
    .controller(
        'ExperienceCtrl',
        function ($rootScope, $scope, $firebase) {
            var experienceRef = new Firebase('https://portofolio.firebaseio.com/experience/');
            $scope.jobs = $firebase(experienceRef);

            $rootScope.loadedData = false;

            $scope.jobs.$on('loaded', function() {
                $rootScope.loadedData = true;
            });
        }
    );
