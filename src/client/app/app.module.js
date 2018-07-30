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
