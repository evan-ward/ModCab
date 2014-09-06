'use strict';

describe('Controller: SupportCtrl', function () {

  // load the controller's module
  beforeEach(module('modCabAppApp'));

  var SupportCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SupportCtrl = $controller('SupportCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
