module MySample {
  export interface IContactScope extends ng.IScope {
    name: string;
  }
  export class ContactController implements ng.IController {
    lastName: string;
    $onInit() {
      this.lastName = "Tiwari";
    }
    constructor($scope: IContactScope) {
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



