export class LoginController {
	constructor($mdDialog, $location, $log, auth, $state) {
		'ngInject';

		this.location = $location;
		this.log = $log;
		this.auth = auth;
		this.dialog = $mdDialog;
		this.state = $state;
	}

	login(form) {
		var vm = this;
		var log = this.log;
		var auth = this.auth;
		var location = this.location;
		var alert = this.showAlert.bind(this);
		if (form.$valid) {
			form.$valid = false;
			auth.login({
				username: vm.user.username,
				password: vm.user.password
			}).then(function (data) {
				log.log("success login" + data);
				// Logged in, redirect to home
				location.path('/');
			}).catch(function (err) {
				log.log("error login");
				vm.error = err;
				form.$valid = true;
				alert();
			});
		}
	}

	showAlert() {
		var dialog = this.dialog;
		var doc = document;
		return dialog.show(
			dialog.alert()
				.parent(angular.element(doc.querySelector('.st-login-box-content')))
				.clickOutsideToClose(true)
				.title('ERROR')
				.textContent('Invalid username or password')
				.ariaLabel('Invalid login alert dialog')
				.ok('OK')
		);
	}

	register() {
		var state = this.state;
		state.go("registration");
	}
}