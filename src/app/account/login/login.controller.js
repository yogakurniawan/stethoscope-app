export class LoginController {
    constructor($mdDialog, $location, $log, auth) {
        'ngInject';
		
				this.location = $location;
				this.log = $log;
				this.auth = auth;
				this.dialog = $mdDialog;
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
				log.log("success login");
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
		return dialog.show(
			dialog.alert()
				.parent(angular.element(document.querySelector('.st-login-box-content')))
				.clickOutsideToClose(true)
				.title('ERROR')
				.textContent('Invalid username or password')
				.ariaLabel('Invalid login alert dialog')
				.ok('OK')
		);		
	}
}