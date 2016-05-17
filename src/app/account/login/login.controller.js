export class LoginController {
    constructor($log, user, userFactory) {
        'ngInject';
		
        this.user = {};
        this.error = false;
		this.log = $log;
		this.userService = user;
		this.userFactory = userFactory;
    }
	
	login(form) {
		// if (form.$valid) {
		// 	Auth.login({
		// 		customerId: vm.user.customerId,
		// 		name: vm.user.name,
		// 		password: vm.user.password
		// 	}).then(function () {
		// 		// Logged in, redirect to home
		// 		$location.path('/');
		// 	}).catch(function (err) {
		// 		vm.error = err;
		// 	});
		// }
		var log = this.log;
		this.userService.getUsers().then(function(users){
			log.log(users);
		});
		this.log.log(this.user.name);
		this.log.log(this.user.password);
		this.log.log(this.login);
		this.log.log(this.userFactory.storage);
	}
}