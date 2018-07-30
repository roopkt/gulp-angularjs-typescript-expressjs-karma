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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvYXBwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTyxRQUFRLENBU2Q7QUFURCxXQUFPLFFBQVE7SUFDRixlQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELFNBQUEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGdCQUFnQixFQUFFLFVBQUMsY0FBdUM7WUFDdkUsY0FBYztpQkFDWCxJQUFJLENBQUMsVUFBVSxFQUNkO2dCQUNFLFFBQVEsRUFBRSxxQkFBcUI7YUFDaEMsQ0FBQyxDQUFDO1FBQ1QsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNOLENBQUMsRUFUTSxRQUFRLEtBQVIsUUFBUSxRQVNkIiwiZmlsZSI6ImNsaWVudC9hcHAvYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZSBNeVNhbXBsZSB7XG4gIGV4cG9ydCB2YXIgTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsnbmdSb3V0ZSddKTtcbiAgTW9kdWxlLmNvbmZpZyhbJyRyb3V0ZVByb3ZpZGVyJywgKCRyb3V0ZVByb3ZpZGVyOiBuZy5yb3V0ZS5JUm91dGVQcm92aWRlcikgPT4ge1xuICAgICRyb3V0ZVByb3ZpZGVyXG4gICAgICAud2hlbignL2NvbnRhY3QnLFxuICAgICAgICB7XG4gICAgICAgICAgdGVtcGxhdGU6ICc8Y29udGFjdD48L2NvbnRhY3Q+JyxcbiAgICAgICAgfSk7XG4gIH1dKTtcbn1cbiJdfQ==
