'use strict';

describe('Controller: ClimateCtrl', function () {

  // load the controller's module
  beforeEach(module('modCabAppApp'));

  var ClimateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClimateCtrl = $controller('ClimateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
