'use strict';

describe('Controller: StayOrGoCtrl', function () {

  // load the controller's module
  beforeEach(module('modCabAppApp'));

  var StayOrGoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StayOrGoCtrl = $controller('StayOrGoCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
