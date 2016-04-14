'use strict';

describe('Controller: StateDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('easyMoveApp'));

  var StateDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StateDetailCtrl = $controller('StateDetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StateDetailCtrl.awesomeThings.length).toBe(3);
  });
});
