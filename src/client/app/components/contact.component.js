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
            this.template='<div>Welcome: {{name}} {{vm.lastName}}</div>';
        }
        return ContactDirective;
    }());
    MySample.ContactDirective = ContactDirective;
    MySample.Module.directive('contact', function () { return new ContactDirective(); });
})(MySample || (MySample = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvY29tcG9uZW50cy9jb250YWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTyxRQUFRLENBdUJkO0FBdkJELFdBQU8sUUFBUTtJQUNiO1FBS0UsMkJBQVksTUFBaUI7WUFDM0IsTUFBTSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7UUFDekIsQ0FBQztRQUxELG1DQUFPLEdBQVA7WUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUMzQixDQUFDO1FBSUgsd0JBQUM7SUFBRCxDQVJBLEFBUUMsSUFBQTtJQVJZLDBCQUFpQixvQkFRN0IsQ0FBQTtJQUNELFNBQUEsTUFBTSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQzFEO1FBS0U7WUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLG1CQUFtQixDQUFDO1lBQ3RDLElBQUksQ0FBQyxXQUFXLEdBQUcsMEJBQTBCLENBQUM7UUFDaEQsQ0FBQztRQUNILHVCQUFDO0lBQUQsQ0FWQSxBQVVDLElBQUE7SUFWWSx5QkFBZ0IsbUJBVTVCLENBQUE7SUFDRCxTQUFBLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLGNBQU0sT0FBQSxJQUFJLGdCQUFnQixFQUFFLEVBQXRCLENBQXNCLENBQUMsQ0FBQztBQUM1RCxDQUFDLEVBdkJNLFFBQVEsS0FBUixRQUFRLFFBdUJkIiwiZmlsZSI6ImNsaWVudC9hcHAvY29tcG9uZW50cy9jb250YWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZSBNeVNhbXBsZSB7XG4gIGV4cG9ydCBjbGFzcyBDb250YWN0Q29udHJvbGxlciBpbXBsZW1lbnRzIG5nLklDb250cm9sbGVyIHtcbiAgICBsYXN0TmFtZTogc3RyaW5nO1xuICAgICRvbkluaXQoKSB7XG4gICAgICB0aGlzLmxhc3ROYW1lID0gXCJUaXdhcmlcIjtcbiAgICB9XG4gICAgY29uc3RydWN0b3IoJHNjb3BlOiBuZy5JU2NvcGUpIHtcbiAgICAgICRzY29wZS5uYW1lID0gXCJSdXBlc2hcIjtcbiAgICB9XG4gIH1cbiAgTW9kdWxlLmNvbnRyb2xsZXIoJ2NvbnRhY3RDb250cm9sbGVyJywgQ29udGFjdENvbnRyb2xsZXIpO1xuICBleHBvcnQgY2xhc3MgQ29udGFjdERpcmVjdGl2ZSB7XG4gICAgY29udHJvbGxlckFzOiBzdHJpbmc7XG4gICAgY29udHJvbGxlcjogc3RyaW5nO1xuICAgIHRlbXBsYXRlVXJsOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMuY29udHJvbGxlckFzID0gJ3ZtJztcbiAgICAgIHRoaXMuY29udHJvbGxlciA9ICdjb250YWN0Q29udHJvbGxlcic7XG4gICAgICB0aGlzLnRlbXBsYXRlVXJsID0gJy4vY29udGFjdC5jb21wb25lbnQuaHRtbCc7XG4gICAgfVxuICB9XG4gIE1vZHVsZS5kaXJlY3RpdmUoJ2NvbnRhY3QnLCAoKSA9PiBuZXcgQ29udGFjdERpcmVjdGl2ZSgpKTtcbn1cbiJdfQ==
