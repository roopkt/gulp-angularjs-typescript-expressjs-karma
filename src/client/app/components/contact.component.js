"use strict";
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvY29tcG9uZW50cy9jb250YWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTyxRQUFRLENBZ0NkO0FBaENELFdBQU8sUUFBUTtJQUtiO1FBTUUsMkJBQW1CLE1BQVc7WUFBWCxXQUFNLEdBQU4sTUFBTSxDQUFLO1lBQzVCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLENBQUM7UUFORCxtQ0FBTyxHQUFQO1lBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDM0IsQ0FBQztRQU1ELGtDQUFNLEdBQU47WUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ25ELENBQUM7UUFDSCx3QkFBQztJQUFELENBYkEsQUFhQyxJQUFBO0lBYlksMEJBQWlCLG9CQWE3QixDQUFBO0lBQ0QsU0FBQSxNQUFNLENBQUMsVUFBVSxDQUFDLG1CQUFtQixFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDMUQ7UUFLRTtZQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsbUJBQW1CLENBQUM7WUFDdEMsSUFBSSxDQUFDLFdBQVcsR0FBRywwQkFBMEIsQ0FBQztRQUNoRCxDQUFDO1FBQ0gsdUJBQUM7SUFBRCxDQVZBLEFBVUMsSUFBQTtJQVZZLHlCQUFnQixtQkFVNUIsQ0FBQTtJQUNELFNBQUEsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsY0FBTSxPQUFBLElBQUksZ0JBQWdCLEVBQUUsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO0FBQzVELENBQUMsRUFoQ00sUUFBUSxLQUFSLFFBQVEsUUFnQ2QiLCJmaWxlIjoiY2xpZW50L2FwcC9jb21wb25lbnRzL2NvbnRhY3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlIE15U2FtcGxlIHtcbiAgZXhwb3J0IGludGVyZmFjZSBJQ29udGFjdFNjb3BlIGV4dGVuZHMgbmcuSVNjb3BlIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgb25TdWJtaXQ6ICcmJ1xuICB9XG4gIGV4cG9ydCBjbGFzcyBDb250YWN0Q29udHJvbGxlciBpbXBsZW1lbnRzIG5nLklDb250cm9sbGVyIHtcbiAgICBsYXN0TmFtZTogc3RyaW5nO1xuICAgICRvbkluaXQoKSB7XG4gICAgICB0aGlzLmxhc3ROYW1lID0gXCJUaXdhcmlcIjtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgJHNjb3BlOiBhbnkpIHtcbiAgICAgICRzY29wZS5uYW1lID0gXCJSdXBlc2hcIjtcbiAgICB9XG5cbiAgICBzdWJtaXQoKSB7XG4gICAgICB0aGlzLiRzY29wZS5vblN1Ym1pdCh0aGlzLiRzY29wZS5jb250YWN0RGV0YWlscyk7XG4gICAgfVxuICB9XG4gIE1vZHVsZS5jb250cm9sbGVyKCdjb250YWN0Q29udHJvbGxlcicsIENvbnRhY3RDb250cm9sbGVyKTtcbiAgZXhwb3J0IGNsYXNzIENvbnRhY3REaXJlY3RpdmUge1xuICAgIGNvbnRyb2xsZXJBczogc3RyaW5nO1xuICAgIGNvbnRyb2xsZXI6IHN0cmluZztcbiAgICB0ZW1wbGF0ZVVybDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICB0aGlzLmNvbnRyb2xsZXJBcyA9ICd2bSc7XG4gICAgICB0aGlzLmNvbnRyb2xsZXIgPSAnY29udGFjdENvbnRyb2xsZXInO1xuICAgICAgdGhpcy50ZW1wbGF0ZVVybCA9ICcuL2NvbnRhY3QuY29tcG9uZW50Lmh0bWwnO1xuICAgIH1cbiAgfVxuICBNb2R1bGUuZGlyZWN0aXZlKCdjb250YWN0JywgKCkgPT4gbmV3IENvbnRhY3REaXJlY3RpdmUoKSk7XG59XG5cblxuXG4iXX0=
