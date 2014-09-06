'use strict';

describe('Controller: HowItWorksCtrl', function () {

  // load the controller's module
  beforeEach(module('modCabAppApp'));

  var HowItWorksCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HowItWorksCtrl = $controller('HowItWorksCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
