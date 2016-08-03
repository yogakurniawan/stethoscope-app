export class RegistrationController {
  constructor() {
    'ngInject';
    this.model = {
      firstName: 'Obi Wan'
    };
    this.fields = [
      {
        "elementAttributes": {
          "layout": "row",
          "layout-sm": "column"
        },
        "fieldGroup": [
          {
            "key": "firstName",
            "className": "flex",
            "type": "input",
            "templateOptions": {
              "label": "First Name"
            }
          },
          {
            "key": "lastName",
            "className": "flex",
            "type": "input",
            "templateOptions": {
              "label": "Last Name"
            }
          }
        ]
      },
    ];
  }


}