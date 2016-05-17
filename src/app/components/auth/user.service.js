export class UserService {
  constructor (Restangular, $localStorage) {
    'ngInject';
	  Restangular.setBaseUrl('http://localhost:9000/api');
	  Restangular.setDefaultRequestParams({access_token: "lDBPygwPb38I97EsCTBEy74W57DQDYmbdHAxcV4mXvE98nX4DJVEbgLzFGhtoaZZ"});
	  this.rest = Restangular;
  }

  getUsers() {
	  var baseUsers = this.rest.all('users');
	  return baseUsers.getList();
  }
}