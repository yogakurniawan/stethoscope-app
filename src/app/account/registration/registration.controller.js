export class RegistrationController {
  constructor() {
    'ngInject';
    this.model = {
      firstName: 'Obi Wan'
    };
    this.fields = [
      {
        type: "input",
        key: "firstName",
        templateOptions: {
          type: "text",
          label: "First name",
          pattern: "[a-zA-Z]+",
          theme: "custom"
        }
      }
    ];
  }


}