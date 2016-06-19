export function UserFactory (Restangular, $log) {
    'ngInject'
    var rest = Restangular;
    var userAll = rest.all('users');
    var userOne = rest.one('users');
    var log = $log;

    return {
        login: login,
        listUsers: getUsers,
        getByUsername: getUserByUsername
    }

    function login(data, success, fail) {
        log.log('LOG: UserFactory.login');
        var login = rest.all("users/login");
        login.post(data).then(function (res) {
            angular.isFunction(success) && success(res);
            log.log('LOG: UserFactory.login :: Login success!!');
        }, function (err) {
            angular.isFunction(fail) && fail(err);
            log.log('LOG: UserFactory.login :: Login failed!!');
        });
    }

    function getUsers() {
        log.log('LOG: UserFactory.getUsers');
        return baseUsers.getList();
    }
    
    function getUserByUsername(username) {
        log.log('LOG: UserFactory.getUserByUsername');
        var user = userOne.get({filter: {where: {username: username}}});
        return user;
    }
}