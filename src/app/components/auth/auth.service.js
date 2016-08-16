export class AuthService {
	constructor ($state, $q, $localStorage, restFactory, Restangular, $log) {
		'ngInject';
		this.restFactory = restFactory;
		this.storage = $localStorage;
		this.rest = Restangular;
		this.q = $q;
		this.log = $log;
	}
	
	login(user, callback) {
		let log = this.log;
		log.log('LOG: Auth.login');
		let cb = callback || angular.noop;
		let q = this.q;
		let deferred = q.defer();
		let restFactory = this.restFactory;
		let storage = this.storage;
		let rest = this.rest;
		var that = this;
		var data = {
			username: user.username,
			password: user.password
		};
		let success = function (res) {
			storage.token = res.id;
			storage.userData = res.userDetail;
			rest.setDefaultRequestParams({access_token: res.id});
			deferred.resolve(res);
			return cb();
		};
		let failed = function (err) {
			that.logout();
			deferred.reject(err);
			return cb(err);
		};
		restFactory.login(data, success, failed);
		return deferred.promise;
	}
	
	isLoggedIn() {
		let log = this.log;
		log.log('LOG: Auth.isLoggedIn');
		return !!this.storage.token;
	}
	
	logout() {
		let storage = this.storage;
		delete storage.userData;
		delete storage.token;
	}
}