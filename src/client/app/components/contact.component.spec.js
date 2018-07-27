"use strict";
describe('contactcomponent', function () {
    var scope, controller;
    beforeEach(function () {
        angular.mock.module('app');
    });
    beforeEach(function () {
        angular.mock.inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            controller = $controller('contactController', {
                $scope: scope,
            });
        });
    });
    describe('controller', function () {
        it('should have controller instance', function () {
            expect(controller).toBeDefined();
        });
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvY29tcG9uZW50cy9jb250YWN0LmNvbXBvbmVudC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxRQUFRLENBQUMsa0JBQWtCLEVBQUU7SUFDM0IsSUFBSSxLQUFVLEVBQUUsVUFBVSxDQUFDO0lBRTNCLFVBQVUsQ0FBQztRQUNULE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUMsQ0FBQyxDQUFDO0lBRUgsVUFBVSxDQUFDO1FBQ1QsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQ2pCLFVBQUMsV0FBa0MsRUFBRSxVQUFnQztZQUNuRSxLQUFLLEdBQUcsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzFCLFVBQVUsR0FBRyxXQUFXLENBQUMsbUJBQW1CLEVBQUU7Z0JBQzVDLE1BQU0sRUFBRSxLQUFLO2FBQ2QsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxZQUFZLEVBQUU7UUFDckIsRUFBRSxDQUFDLGlDQUFpQyxFQUFFO1lBQ3BDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUwsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiY2xpZW50L2FwcC9jb21wb25lbnRzL2NvbnRhY3QuY29tcG9uZW50LnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJkZXNjcmliZSgnY29udGFjdGNvbXBvbmVudCcsICgpID0+IHtcbiAgdmFyIHNjb3BlOiBhbnksIGNvbnRyb2xsZXI7XG5cbiAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgYW5ndWxhci5tb2NrLm1vZHVsZSgnYXBwJyk7XG4gIH0pO1xuXG4gIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgIGFuZ3VsYXIubW9jay5pbmplY3QoXG4gICAgICAoJGNvbnRyb2xsZXI6IG5nLklDb250cm9sbGVyU2VydmljZSwgJHJvb3RTY29wZTogbmcuSVJvb3RTY29wZVNlcnZpY2UpID0+IHtcbiAgICAgICAgc2NvcGUgPSAkcm9vdFNjb3BlLiRuZXcoKTtcbiAgICAgICAgY29udHJvbGxlciA9ICRjb250cm9sbGVyKCdjb250YWN0Q29udHJvbGxlcicsIHtcbiAgICAgICAgICAkc2NvcGU6IHNjb3BlLFxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdjb250cm9sbGVyJywgKCkgPT4ge1xuICAgIGl0KCdzaG91bGQgaGF2ZSBjb250cm9sbGVyIGluc3RhbmNlJywgKCkgPT4ge1xuICAgICAgZXhwZWN0KGNvbnRyb2xsZXIpLnRvQmVEZWZpbmVkKCk7XG4gICAgfSk7XG4gIH0pO1xuXG59KTtcbiJdfQ==
