'use strict';

describe('Controller: SizeCtrl', function () {

  // load the controller's module
  beforeEach(module('modCabAppApp'));

  var SizeCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SizeCtrl = $controller('SizeCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
