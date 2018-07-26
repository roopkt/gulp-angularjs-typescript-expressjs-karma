"use strict";
var MySample;
(function (MySample) {
    MySample.Module = angular.module('app', ['ngRoute']);
    MySample.Module.config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/contact', { template: '<contact></contact>' });
        }]);
})(MySample || (MySample = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvYXBwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTyxRQUFRLENBT2Q7QUFQRCxXQUFPLFFBQVE7SUFDRixlQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELFNBQUEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGdCQUFnQixFQUFFLFVBQUMsY0FBdUM7WUFDdkUsY0FBYztpQkFDWCxJQUFJLENBQUMsVUFBVSxFQUNkLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFFLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxFQVBNLFFBQVEsS0FBUixRQUFRLFFBT2QiLCJmaWxlIjoiY2xpZW50L2FwcC9hcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlIE15U2FtcGxlIHtcbiAgZXhwb3J0IHZhciBNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJywgWyduZ1JvdXRlJ10pO1xuICBNb2R1bGUuY29uZmlnKFsnJHJvdXRlUHJvdmlkZXInLCAoJHJvdXRlUHJvdmlkZXI6IG5nLnJvdXRlLklSb3V0ZVByb3ZpZGVyKSA9PiB7XG4gICAgJHJvdXRlUHJvdmlkZXJcbiAgICAgIC53aGVuKCcvY29udGFjdCcsXG4gICAgICAgIHsgdGVtcGxhdGU6ICc8Y29udGFjdD48L2NvbnRhY3Q+JyB9KTtcbiAgfV0pO1xufVxuIl19
