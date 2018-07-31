module MySample {
  export var Module = angular.module('contactModule', ['ngRoute']);
  Module.config(['$routeProvider', ($routeProvider: ng.route.IRouteProvider) => {
    $routeProvider
      .when('/contact',
        {
          template: '<smp-contact></smp-contact>',
        });
  }]);
}
