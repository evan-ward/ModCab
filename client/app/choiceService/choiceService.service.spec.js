'use strict';

describe('Service: choiceService', function () {

  // load the service's module
  beforeEach(module('modCabAppApp'));

  // instantiate service
  var choiceService;
  beforeEach(inject(function (_choiceService_) {
    choiceService = _choiceService_;
  }));

  it('should do something', function () {
    expect(!!choiceService).toBe(true);
  });

});
