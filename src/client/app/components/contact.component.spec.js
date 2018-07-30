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
