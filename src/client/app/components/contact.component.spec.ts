describe('contactcomponent', () => {
  var scope: any, controller;

  beforeEach(() => {
    angular.mock.module('app');
  });

  beforeEach(() => {
    angular.mock.inject(
      ($controller: ng.IControllerService, $rootScope: ng.IRootScopeService) => {
        scope = $rootScope.$new();
        controller = $controller('contactController', {
          $scope: scope,
        });
      })
  });

  describe('controller', () => {
    it('should have controller', () => {
      expect(controller).toBeDefined();
    });
  });

});
