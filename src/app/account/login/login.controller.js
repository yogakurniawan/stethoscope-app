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
			auth.login({
				username: vm.user.username,
				password: vm.user.password
			}).then(function () {
				log.log("success login");
				// Logged in, redirect to home
				location.path('/');
			}).catch(function (err) {
				log.log("error login");
				vm.error = err;
				alert();
			});
		}
	}
	
	showAlert() {
		var dialog = this.dialog;
		dialog.show(
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