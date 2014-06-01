'use strict';

describe('Controller: ResultadosCtrl', function () {

  // load the controller's module
  beforeEach(module('cariocaApp'));

  var ResultadosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResultadosCtrl = $controller('ResultadosCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
