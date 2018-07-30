describe('contactcomponent', function () {
    var scope, controller;
    beforeEach(function () {
        angular.mock.module('app');
    });
    beforeEach(function () {
        angular.mock.inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            controller = $controller('contactController', {
                $scope: scope
            });
        });
    });
    describe('controller', function () {
        it('should have controller', function () {
            expect(controller).toBeDefined();
        });
        it('On Submit should invoke', function () {
            scope.contactDetails = {
                "email": "roopkt@gmail.com",
                "message": "Hi,\nPlease call me."
            };
        });
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2NvbnRhY3QuY29tcG9uZW50LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsUUFBUSxDQUFDLGtCQUFrQixFQUFFO0lBQzNCLElBQUksS0FBVSxFQUFFLFVBQVUsQ0FBQztJQUUzQixVQUFVLENBQUM7UUFDVCxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDLENBQUMsQ0FBQztJQUVILFVBQVUsQ0FBQztRQUNULE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUNqQixVQUFDLFdBQWtDLEVBQUUsVUFBZ0M7WUFDbkUsS0FBSyxHQUFHLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMxQixVQUFVLEdBQUcsV0FBVyxDQUFDLG1CQUFtQixFQUFFO2dCQUM1QyxNQUFNLEVBQUUsS0FBSzthQUNkLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsWUFBWSxFQUFFO1FBQ3JCLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRTtZQUMzQixNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMseUJBQXlCLEVBQUU7WUFDNUIsS0FBSyxDQUFDLGNBQWMsR0FBRztnQkFDckIsT0FBTyxFQUFFLGtCQUFrQjtnQkFDM0IsU0FBUyxFQUFFLHNCQUFzQjthQUNsQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2NvbnRhY3QuY29tcG9uZW50LnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJkZXNjcmliZSgnY29udGFjdGNvbXBvbmVudCcsICgpID0+IHtcbiAgdmFyIHNjb3BlOiBhbnksIGNvbnRyb2xsZXI7XG5cbiAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgYW5ndWxhci5tb2NrLm1vZHVsZSgnYXBwJyk7XG4gIH0pO1xuXG4gIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgIGFuZ3VsYXIubW9jay5pbmplY3QoXG4gICAgICAoJGNvbnRyb2xsZXI6IG5nLklDb250cm9sbGVyU2VydmljZSwgJHJvb3RTY29wZTogbmcuSVJvb3RTY29wZVNlcnZpY2UpID0+IHtcbiAgICAgICAgc2NvcGUgPSAkcm9vdFNjb3BlLiRuZXcoKTtcbiAgICAgICAgY29udHJvbGxlciA9ICRjb250cm9sbGVyKCdjb250YWN0Q29udHJvbGxlcicsIHtcbiAgICAgICAgICAkc2NvcGU6IHNjb3BlLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgnY29udHJvbGxlcicsICgpID0+IHtcbiAgICBpdCgnc2hvdWxkIGhhdmUgY29udHJvbGxlcicsICgpID0+IHtcbiAgICAgIGV4cGVjdChjb250cm9sbGVyKS50b0JlRGVmaW5lZCgpO1xuICAgIH0pO1xuXG4gICAgaXQoJ09uIFN1Ym1pdCBzaG91bGQgaW52b2tlJywgKCkgPT4ge1xuICAgICAgc2NvcGUuY29udGFjdERldGFpbHMgPSB7XG4gICAgICAgIFwiZW1haWxcIjogXCJyb29wa3RAZ21haWwuY29tXCIsXG4gICAgICAgIFwibWVzc2FnZVwiOiBcIkhpLFxcblBsZWFzZSBjYWxsIG1lLlwiLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbiJdfQ==
