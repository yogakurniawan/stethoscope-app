export class LoginController {
    constructor() {
        'ngInject';
        var vm = this;
        // view model bindings
		/**
		 * @ngdoc property
		 * @name user
		 * @propertyOf enzymeApp.account.controller:LoginController
		 * @description
		 * The user data to use as login
		 *
		 * @returns {User} The user data
		 */
        vm.user = {};
        /**
		 * @ngdoc property
		 * @name error
		 * @propertyOf enzymeApp.account.controller:LoginController
		 * @description
		 * Error flag
		 * @returns {Boolean} True if there is an error
		 */
        vm.error = false;

        // Login function (documented below)
        vm.login = login;

		/**
		 * @ngdoc function
		 * @name login
		 * @methodOf enzymeApp.account.controller:LoginController
		 * @description
		 * Function to use as submit for the login form
		 * @param {form} form The form to fetch the data from
		 */
        function login(form) {
        }
    }
}