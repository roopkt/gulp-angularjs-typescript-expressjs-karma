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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvY29tcG9uZW50cy9jb250YWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTyxRQUFRLENBMEJkO0FBMUJELFdBQU8sUUFBUTtJQUliO1FBS0UsMkJBQVksTUFBcUI7WUFDL0IsTUFBTSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7UUFDekIsQ0FBQztRQUxELG1DQUFPLEdBQVA7WUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUMzQixDQUFDO1FBSUgsd0JBQUM7SUFBRCxDQVJBLEFBUUMsSUFBQTtJQVJZLDBCQUFpQixvQkFRN0IsQ0FBQTtJQUNELFNBQUEsTUFBTSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQzFEO1FBS0U7WUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLG1CQUFtQixDQUFDO1lBQ3RDLElBQUksQ0FBQyxXQUFXLEdBQUcsMEJBQTBCLENBQUM7UUFDaEQsQ0FBQztRQUNILHVCQUFDO0lBQUQsQ0FWQSxBQVVDLElBQUE7SUFWWSx5QkFBZ0IsbUJBVTVCLENBQUE7SUFDRCxTQUFBLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLGNBQU0sT0FBQSxJQUFJLGdCQUFnQixFQUFFLEVBQXRCLENBQXNCLENBQUMsQ0FBQztBQUM1RCxDQUFDLEVBMUJNLFFBQVEsS0FBUixRQUFRLFFBMEJkIiwiZmlsZSI6ImNsaWVudC9hcHAvY29tcG9uZW50cy9jb250YWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZSBNeVNhbXBsZSB7XG4gIGV4cG9ydCBpbnRlcmZhY2UgSUNvbnRhY3RTY29wZSBleHRlbmRzIG5nLklTY29wZSB7XG4gICAgbmFtZTogc3RyaW5nO1xuICB9XG4gIGV4cG9ydCBjbGFzcyBDb250YWN0Q29udHJvbGxlciBpbXBsZW1lbnRzIG5nLklDb250cm9sbGVyIHtcbiAgICBsYXN0TmFtZTogc3RyaW5nO1xuICAgICRvbkluaXQoKSB7XG4gICAgICB0aGlzLmxhc3ROYW1lID0gXCJUaXdhcmlcIjtcbiAgICB9XG4gICAgY29uc3RydWN0b3IoJHNjb3BlOiBJQ29udGFjdFNjb3BlKSB7XG4gICAgICAkc2NvcGUubmFtZSA9IFwiUnVwZXNoXCI7XG4gICAgfVxuICB9XG4gIE1vZHVsZS5jb250cm9sbGVyKCdjb250YWN0Q29udHJvbGxlcicsIENvbnRhY3RDb250cm9sbGVyKTtcbiAgZXhwb3J0IGNsYXNzIENvbnRhY3REaXJlY3RpdmUge1xuICAgIGNvbnRyb2xsZXJBczogc3RyaW5nO1xuICAgIGNvbnRyb2xsZXI6IHN0cmluZztcbiAgICB0ZW1wbGF0ZVVybDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICB0aGlzLmNvbnRyb2xsZXJBcyA9ICd2bSc7XG4gICAgICB0aGlzLmNvbnRyb2xsZXIgPSAnY29udGFjdENvbnRyb2xsZXInO1xuICAgICAgdGhpcy50ZW1wbGF0ZVVybCA9ICcuL2NvbnRhY3QuY29tcG9uZW50Lmh0bWwnO1xuICAgIH1cbiAgfVxuICBNb2R1bGUuZGlyZWN0aXZlKCdjb250YWN0JywgKCkgPT4gbmV3IENvbnRhY3REaXJlY3RpdmUoKSk7XG59XG5cblxuXG4iXX0=
