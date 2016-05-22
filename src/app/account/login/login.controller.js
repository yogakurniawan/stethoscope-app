export class LoginController {
    constructor($location, $log, auth) {
        'ngInject';
		
		this.location = $location;
		this.log = $log;
		this.auth = auth;
    }
	
	login(form) {
		var vm = this;
		var log = this.log;
		var auth = this.auth;
		var location = this.location;
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
			});
		}
	}
}