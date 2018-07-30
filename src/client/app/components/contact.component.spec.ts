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
      });
  });

  describe('controller', () => {
    it('should have controller', () => {
      expect(controller).toBeDefined();
    });

    it('On Submit should invoke onSubmit callback', () => {
      scope.contactDetails = {
        "email": "roopkt@gmail.com",
        "message": "Hi,\nPlease call me.",
      };
      scope.onSubmit = () => { };
      spyOn(scope, 'onSubmit').and.callFake(function (data: any) {
        expect(data).toEqual(scope.contactDetails);
      });
      controller.submit();
    });
  });
});
