"use strict";
var MySample;
(function (MySample) {
    var ContactController = /** @class */ (function () {
        ContactController.$inject = ["$scope"];
        function ContactController($scope) {
            $scope.name = "Rupesh";
        }
        ContactController.prototype.$onInit = function () {
            this.lastName = "Tiwari";
        };
        return ContactController;
    }());
    MySample.ContactController = ContactController;
    MySample.Module.controller('contactController', ContactController);
    var ContactDirective = /** @class */ (function () {
        function ContactDirective() {
            this.controllerAs = 'vm';
            this.controller = 'contactController';
            this.template='<div>Welcome : {{name}} {{vm.lastName}}</div>';
        }
        return ContactDirective;
    }());
    MySample.ContactDirective = ContactDirective;
    MySample.Module.directive('contact', function () { return new ContactDirective(); });
})(MySample || (MySample = {}));
