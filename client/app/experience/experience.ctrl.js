/**
 * Copyright (c) 2015, Grzegorz Swatowski
 */

'use strict';

angular.module('portofolio.experience').
  controller('ExperienceCtrl', /*@ngInject*/function($scope, experience, $sce) {
    this.experience = _.map(experience, (item) => {
      item.description = $sce.trustAsHtml(item.description.replace(
        /http:\/\/([0-9a-z.-/]+)/gi,
        (str) => '<a href="' + str + '" target="_blank">' + str + '</a>'
      ));
      return item;
    });
  });