module MySample {
  export var Module = angular.module('app', ['ngRoute']);
  Module.config(['$routeProvider', ($routeProvider: ng.route.IRouteProvider) => {
    $routeProvider
      .when('/contact',
        {
          template: '<contact></contact>',
        });
  }]);
}
