var MySample;
(function (MySample) {
    var ContactController = /** @class */ (function () {
        ContactController.$inject = ["$scope"];
        function ContactController($scope) {
            this.$scope = $scope;
            $scope.name = "Rupesh";
        }
        ContactController.prototype.$onInit = function () {
            this.lastName = "Tiwari";
        };
        ContactController.prototype.submit = function () {
            this.$scope.onSubmit(this.$scope.contactDetails);
        };
        return ContactController;
    }());
    MySample.ContactController = ContactController;
    MySample.Module.controller('contactController', ContactController);
    var ContactDirective = /** @class */ (function () {
        function ContactDirective() {
            this.controllerAs = 'vm';
            this.controller = 'contactController';
            this.template='<div><div class="form-group"><label for="exampleInputEmail1">Email address</label> <input ng-model="contactDetails.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"> <small id="emailHelp" class="form-text text-muted">We\'ll never share your email with anyone else.</small></div><div class="form-group"><label for="exampleInputMessage1">Message</label> <textarea ng-model="contactDetails.message" type="Message" class="form-control" id="exampleInputMessage1" placeholder="Message"></textarea></div><button type="submit" ng-click="vm.submit()" class="btn btn-primary">Submit</button><div class="alert alert-warning"><h3>contactDetails JSON</h3><pre>\n{{contactDetails|json}}\n</pre></div></div>';
        }
        return ContactDirective;
    }());
    MySample.ContactDirective = ContactDirective;
    MySample.Module.directive('contact', function () { return new ContactDirective(); });
})(MySample || (MySample = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2NvbnRhY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQU8sUUFBUSxDQWdDZDtBQWhDRCxXQUFPLFFBQVE7SUFLYjtRQU1FLDJCQUFtQixNQUFXO1lBQVgsV0FBTSxHQUFOLE1BQU0sQ0FBSztZQUM1QixNQUFNLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztRQUN6QixDQUFDO1FBTkQsbUNBQU8sR0FBUDtZQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQzNCLENBQUM7UUFNRCxrQ0FBTSxHQUFOO1lBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNuRCxDQUFDO1FBQ0gsd0JBQUM7SUFBRCxDQWJBLEFBYUMsSUFBQTtJQWJZLDBCQUFpQixvQkFhN0IsQ0FBQTtJQUNELFNBQUEsTUFBTSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQzFEO1FBS0U7WUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLG1CQUFtQixDQUFDO1lBQ3RDLElBQUksQ0FBQyxXQUFXLEdBQUcsMEJBQTBCLENBQUM7UUFDaEQsQ0FBQztRQUNILHVCQUFDO0lBQUQsQ0FWQSxBQVVDLElBQUE7SUFWWSx5QkFBZ0IsbUJBVTVCLENBQUE7SUFDRCxTQUFBLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLGNBQU0sT0FBQSxJQUFJLGdCQUFnQixFQUFFLEVBQXRCLENBQXNCLENBQUMsQ0FBQztBQUM1RCxDQUFDLEVBaENNLFFBQVEsS0FBUixRQUFRLFFBZ0NkIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2NvbnRhY3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlIE15U2FtcGxlIHtcbiAgZXhwb3J0IGludGVyZmFjZSBJQ29udGFjdFNjb3BlIGV4dGVuZHMgbmcuSVNjb3BlIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgb25TdWJtaXQ6ICcmJ1xuICB9XG4gIGV4cG9ydCBjbGFzcyBDb250YWN0Q29udHJvbGxlciBpbXBsZW1lbnRzIG5nLklDb250cm9sbGVyIHtcbiAgICBsYXN0TmFtZTogc3RyaW5nO1xuICAgICRvbkluaXQoKSB7XG4gICAgICB0aGlzLmxhc3ROYW1lID0gXCJUaXdhcmlcIjtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgJHNjb3BlOiBhbnkpIHtcbiAgICAgICRzY29wZS5uYW1lID0gXCJSdXBlc2hcIjtcbiAgICB9XG5cbiAgICBzdWJtaXQoKSB7XG4gICAgICB0aGlzLiRzY29wZS5vblN1Ym1pdCh0aGlzLiRzY29wZS5jb250YWN0RGV0YWlscyk7XG4gICAgfVxuICB9XG4gIE1vZHVsZS5jb250cm9sbGVyKCdjb250YWN0Q29udHJvbGxlcicsIENvbnRhY3RDb250cm9sbGVyKTtcbiAgZXhwb3J0IGNsYXNzIENvbnRhY3REaXJlY3RpdmUge1xuICAgIGNvbnRyb2xsZXJBczogc3RyaW5nO1xuICAgIGNvbnRyb2xsZXI6IHN0cmluZztcbiAgICB0ZW1wbGF0ZVVybDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICB0aGlzLmNvbnRyb2xsZXJBcyA9ICd2bSc7XG4gICAgICB0aGlzLmNvbnRyb2xsZXIgPSAnY29udGFjdENvbnRyb2xsZXInO1xuICAgICAgdGhpcy50ZW1wbGF0ZVVybCA9ICcuL2NvbnRhY3QuY29tcG9uZW50Lmh0bWwnO1xuICAgIH1cbiAgfVxuICBNb2R1bGUuZGlyZWN0aXZlKCdjb250YWN0JywgKCkgPT4gbmV3IENvbnRhY3REaXJlY3RpdmUoKSk7XG59XG5cblxuXG4iXX0=
