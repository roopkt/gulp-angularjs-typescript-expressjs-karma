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
        it('should have controller', function () {
            expect(controller).toBeDefined();
        });
        it('On Submit should invoke onSubmit callback', function () {
            scope.contactDetails = {
                "email": "roopkt@gmail.com",
                "message": "Hi,\nPlease call me.",
            };
            scope.onSubmit = function () { };
            spyOn(scope, 'onSubmit').and.callFake(function (data) {
                expect(data).toEqual(scope.contactDetails);
            });
            controller.submit();
        });
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvY29tcG9uZW50cy9jb250YWN0LmNvbXBvbmVudC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxRQUFRLENBQUMsa0JBQWtCLEVBQUU7SUFDM0IsSUFBSSxLQUFVLEVBQUUsVUFBVSxDQUFDO0lBRTNCLFVBQVUsQ0FBQztRQUNULE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUMsQ0FBQyxDQUFDO0lBRUgsVUFBVSxDQUFDO1FBQ1QsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQ2pCLFVBQUMsV0FBa0MsRUFBRSxVQUFnQztZQUNuRSxLQUFLLEdBQUcsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzFCLFVBQVUsR0FBRyxXQUFXLENBQUMsbUJBQW1CLEVBQUU7Z0JBQzVDLE1BQU0sRUFBRSxLQUFLO2FBQ2QsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxZQUFZLEVBQUU7UUFDckIsRUFBRSxDQUFDLHdCQUF3QixFQUFFO1lBQzNCLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQywyQ0FBMkMsRUFBRTtZQUM5QyxLQUFLLENBQUMsY0FBYyxHQUFHO2dCQUNyQixPQUFPLEVBQUUsa0JBQWtCO2dCQUMzQixTQUFTLEVBQUUsc0JBQXNCO2FBQ2xDLENBQUM7WUFDRixLQUFLLENBQUMsUUFBUSxHQUFHLGNBQVEsQ0FBQyxDQUFDO1lBQzNCLEtBQUssQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQVM7Z0JBQ3ZELE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzdDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJjbGllbnQvYXBwL2NvbXBvbmVudHMvY29udGFjdC5jb21wb25lbnQuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImRlc2NyaWJlKCdjb250YWN0Y29tcG9uZW50JywgKCkgPT4ge1xuICB2YXIgc2NvcGU6IGFueSwgY29udHJvbGxlcjtcblxuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICBhbmd1bGFyLm1vY2subW9kdWxlKCdhcHAnKTtcbiAgfSk7XG5cbiAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgYW5ndWxhci5tb2NrLmluamVjdChcbiAgICAgICgkY29udHJvbGxlcjogbmcuSUNvbnRyb2xsZXJTZXJ2aWNlLCAkcm9vdFNjb3BlOiBuZy5JUm9vdFNjb3BlU2VydmljZSkgPT4ge1xuICAgICAgICBzY29wZSA9ICRyb290U2NvcGUuJG5ldygpO1xuICAgICAgICBjb250cm9sbGVyID0gJGNvbnRyb2xsZXIoJ2NvbnRhY3RDb250cm9sbGVyJywge1xuICAgICAgICAgICRzY29wZTogc2NvcGUsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdjb250cm9sbGVyJywgKCkgPT4ge1xuICAgIGl0KCdzaG91bGQgaGF2ZSBjb250cm9sbGVyJywgKCkgPT4ge1xuICAgICAgZXhwZWN0KGNvbnRyb2xsZXIpLnRvQmVEZWZpbmVkKCk7XG4gICAgfSk7XG5cbiAgICBpdCgnT24gU3VibWl0IHNob3VsZCBpbnZva2Ugb25TdWJtaXQgY2FsbGJhY2snLCAoKSA9PiB7XG4gICAgICBzY29wZS5jb250YWN0RGV0YWlscyA9IHtcbiAgICAgICAgXCJlbWFpbFwiOiBcInJvb3BrdEBnbWFpbC5jb21cIixcbiAgICAgICAgXCJtZXNzYWdlXCI6IFwiSGksXFxuUGxlYXNlIGNhbGwgbWUuXCIsXG4gICAgICB9O1xuICAgICAgc2NvcGUub25TdWJtaXQgPSAoKSA9PiB7IH07XG4gICAgICBzcHlPbihzY29wZSwgJ29uU3VibWl0JykuYW5kLmNhbGxGYWtlKGZ1bmN0aW9uIChkYXRhOiBhbnkpIHtcbiAgICAgICAgZXhwZWN0KGRhdGEpLnRvRXF1YWwoc2NvcGUuY29udGFjdERldGFpbHMpO1xuICAgICAgfSk7XG4gICAgICBjb250cm9sbGVyLnN1Ym1pdCgpO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuIl19
