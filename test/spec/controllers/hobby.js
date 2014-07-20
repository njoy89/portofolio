'use strict';

describe('Controller: HobbyCtrl', function () {

  // load the controller's module
  beforeEach(module('frontendApp'));

  var HobbyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HobbyCtrl = $controller('HobbyCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
