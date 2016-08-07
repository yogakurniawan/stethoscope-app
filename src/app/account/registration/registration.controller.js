export class RegistrationController {
  constructor($log, $state) {
    'ngInject';
    this.state = $state;
    this.model = {
      title: 1,
      firstName: null,
      lastName: null
    };
    this.fields = [
      {
        key: "practiceName",
        type: "input",
        templateOptions: {
          label: "Practice Name"
        }
      },
      {
        elementAttributes: {
          "layout": "row",
          "layout-sm": "column"
        },
        fieldGroup: [
          {
            type: "select",
            key: "title",
            templateOptions: {
              label: "Title",
              multiple: false,
              labelProp: "firstName",
              valueProp: "id",
              options: [],
              onOpening: () => {
                $log.log('select is opened');
              },
              onClosing: () => {
                $log.log('select is closed');
              }
            },
            ngModelAttrs: {
              onOpening: {
                statement: 'md-on-open'
              },
              onClosing: {
                statement: 'md-on-close'
              }
            },
            controller: function ($scope) {
              'ngInject';
              // $scope.to.loading = jsonService.getJSON().then(function (response) {
              $scope.to.options = [
                { firstName: "Mr.", id: 1 },
                { firstName: "Mrs.", id: 2 },
                { firstName: "Dr.", id: 3 }
              ];
              // note, the line above is shorthand for:
              // $scope.options.templateOptions.options = data;
              // return response;
              // });
            }
          },
          {
            key: "firstName",
            className: "flex",
            type: "input",
            templateOptions: {
              label: "First Name"
            }
          },
          {
            key: "lastName",
            className: "flex",
            type: "input",
            templateOptions: {
              label: "Last Name"
            }
          }
        ]
      },
      {
        key: "email",
        type: "input",
        templateOptions: {
          label: "Email"
        }
      },
      {
        key: "phoneNumber",
        type: "input",
        templateOptions: {
          label: "Phone"
        }
      }
    ];
  }

  login() {
    var state = this.state;
    state.go('login');
  }
}