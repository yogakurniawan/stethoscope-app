export class AuthService {
	constructor ($state, $q, $localStorage, userFactory, Restangular, $log) {
		'ngInject';
		this.userFactory = userFactory;
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
		let userFactory = this.userFactory;
		let storage = this.storage;
		let rest = this.rest;
		var that = this;
		var data = {
			username: user.username,
			password: user.password
		};
		let success = function (res) {
			storage.token = res.id;
			rest.setDefaultRequestParams({access_token: res.id});
			that.getUserDetail(data.username, deferred.resolve);
			return cb();
		};
		let failed = function (err) {
			that.logout();
			deferred.reject(err);
			return cb(err);
		};
		userFactory.login(data, success, failed);
		return deferred.promise;
	}
	
	isLoggedIn() {
		let log = this.log;
		log.log('LOG: Auth.isLoggedIn');
		return !!this.storage.token;
	}

	getUserDetail(username, success, failed) {
		var storage = this.storage;
		let userFactory = this.userFactory;
		failed = failed || angular.noop;
		userFactory.getByUsername(username).then(function(res){
			if (typeof success === 'function') {
				success(res);
			}
			storage.userData = angular.isArray(res) ? res[0] : res;
		}, failed);
	}
	
	logout() {
		let storage = this.storage;
		delete storage.userData;
		delete storage.token;
	}
}