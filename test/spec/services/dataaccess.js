'use strict';

describe('Service: dataAccess', function () {

  // load the service's module
  beforeEach(module('cariocaApp'));

  // instantiate service
  var dataAccess;
  beforeEach(inject(function (_dataAccess_) {
    dataAccess = _dataAccess_;
  }));

  it('should do something', function () {
    expect(!!dataAccess).toBe(true);
  });

});
