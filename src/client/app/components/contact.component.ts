module MySample {
  export interface IContactScope extends ng.IScope {
    name: string;
    onSubmit: '&'
  }
  export class ContactController implements ng.IController {
    lastName: string;
    $onInit() {
      this.lastName = "Tiwari";
    }

    constructor(public $scope: any) {
      $scope.name = "Rupesh";
    }

    submit() {
      this.$scope.onSubmit(this.$scope.contactDetails);
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



