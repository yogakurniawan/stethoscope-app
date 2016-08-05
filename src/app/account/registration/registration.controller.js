export class RegistrationController {
  constructor() {
    'ngInject';
    this.model = {
      firstName: null,
      lastName: null
    };
    this.fields = [
      {
        "key": "practiceName",
        "type": "input",
        "templateOptions": {
          "label": "Practice Name"
        }
      },
      {
        "type": "select",
        "key": "title",
        "templateOptions": {
          "label": "Title",
          "multiple": false,
          "labelProp": "firstName",
          "valueProp": "id",
          "options": [
            { firstName: "Mr.", id: 1 },
            { firstName: "Mrs.", id: 2 },
            { firstName: "Dr.", id: 3 }
          ],
          "onOpen": () => {
            // console.log('select is opened');
          },
          "onClose": () => {
            // console.log('select is closed');
          }
        }
      },
      {
        "key": "firstName",
        "type": "input",
        "templateOptions": {
          "label": "First Name"
        }
      },
      {
        "key": "lastName",
        "type": "input",
        "templateOptions": {
          "label": "Last Name"
        }
      }
    ];
  }


}