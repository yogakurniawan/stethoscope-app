export class Auth {
	constructor (Restangular) {
		'ngInject';
	}
	
	login(user, callback) {
		/* jshint validthis:true */
		var cb = callback || angular.noop;
		var deferred = $q.defer();
		$cookies.customerId = user.customerId;

		$http.post('/auth/local', {
			customerId: user.customerId,
			name: user.name,
			password: user.password
		}).success(function (data) {
			$cookieStore.put('token', data.token);
			$cookieStore.remove('customerID');
			currentUser = User.get();
			deferred.resolve(data);
			return cb();
		}).error(function (err) {
			this.logout();
			deferred.reject(err);
			return cb(err);
		}.bind(this));

		return deferred.promise;
	}
}