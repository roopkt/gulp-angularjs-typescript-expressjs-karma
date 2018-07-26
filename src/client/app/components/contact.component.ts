module MySample {
  export class ContactController implements ng.IController {
    lastName: string;
    $onInit() {
      this.lastName = "Tiwari";
    }
    constructor($scope: ng.IScope) {
      $scope.name = "Rupesh";
    }
  }
  Module.controller('contactController', ContactController);
  export class ContactDirective {
    controllerAs: string;
    controller: string;
    templateUrl: string;

    constructor() {
      this.controllerAs = 'vm';
      this.controller = 'contactController';
      this.templateUrl = './contact.component.html';
    }
  }
  Module.directive('contact', () => new ContactDirective());
}
