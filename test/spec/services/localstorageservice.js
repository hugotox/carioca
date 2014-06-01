'use strict';

describe('Service: localStorageService', function () {

  // load the service's module
  beforeEach(module('cariocaApp'));

  // instantiate service
  var localStorageService;
  beforeEach(inject(function (_localStorageService_) {
    localStorageService = _localStorageService_;
  }));

  it('should do something', function () {
    expect(!!localStorageService).toBe(true);
  });

});
