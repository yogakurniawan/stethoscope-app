export class Auth {
	constructor ($state, $q, $localStorage, userFactory, Restangular, $log) {
		'ngInject';
		this.userFactory = userFactory;
		this.storage = $localStorage;
		this.rest = Restangular;
		this.q = $q;
		this.log = $log;
	}
	
	login(user, callback) {
		var log = this.log;
		log.log('LOG: Auth.login');
		var cb = callback || angular.noop;
		var q = this.q;
		var deferred = q.defer();
		var userFactory = this.userFactory;
		var storage = this.storage;
		var rest = this.rest;
		var data = {
			username: user.username,
			password: user.password
		};
		userFactory.login(data, function (data) {
			storage.token = data.id;
			rest.setDefaultRequestParams({access_token: data.id});
			deferred.resolve(data);
			return cb();
		}, function (err) {
			// this.logout();
			deferred.reject(err);
			return cb(err);
		});

		return deferred.promise;
	}
	
	isLoggedIn() {
		var log = this.log;
		log.log('LOG: Auth.isLoggedIn');
		return !!this.storage.token;
	}
	
	logout() {
		var storage = this.storage;
		delete storage.token;
	}
}