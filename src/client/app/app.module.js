"use strict";
var MySample;
(function (MySample) {
    MySample.Module = angular.module('app', ['ngRoute']);
    MySample.Module.config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/contact', {
                template: '<contact></contact>',
            });
        }]);
})(MySample || (MySample = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvYXBwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTyxRQUFRLENBU2Q7QUFURCxXQUFPLFFBQVE7SUFDRixlQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELFNBQUEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGdCQUFnQixFQUFFLFVBQUMsY0FBdUM7WUFDdkUsY0FBYztpQkFDWCxJQUFJLENBQUMsVUFBVSxFQUNkO2dCQUNFLFFBQVEsRUFBRSxxQkFBcUI7YUFDaEMsQ0FBQyxDQUFDO1FBQ1QsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNOLENBQUMsRUFUTSxRQUFRLEtBQVIsUUFBUSxRQVNkIiwiZmlsZSI6ImNsaWVudC9hcHAvYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZSBNeVNhbXBsZSB7XG4gIGV4cG9ydCB2YXIgTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsnbmdSb3V0ZSddKTsgXG4gIE1vZHVsZS5jb25maWcoWyckcm91dGVQcm92aWRlcicsICgkcm91dGVQcm92aWRlcjogbmcucm91dGUuSVJvdXRlUHJvdmlkZXIpID0+IHtcbiAgICAkcm91dGVQcm92aWRlclxuICAgICAgLndoZW4oJy9jb250YWN0JyxcbiAgICAgICAge1xuICAgICAgICAgIHRlbXBsYXRlOiAnPGNvbnRhY3Q+PC9jb250YWN0PicsXG4gICAgICAgIH0pO1xuICB9XSk7XG59XG4iXX0=
