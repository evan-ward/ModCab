'use strict';

describe('Controller: DesignsCtrl', function () {

  // load the controller's module
  beforeEach(module('modCabAppApp'));

  var DesignsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DesignsCtrl = $controller('DesignsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
