export function RestFactory (Restangular, $log) {
    'ngInject'
    var rest = Restangular;
    var lookupAll = rest.all('lookups');
    var userAll = rest.all('users');
    var userOne = rest.one('users');
    var log = $log;

    return {
        listLookups: getLookups,
        login: login,
        listUsers: getUsers,
        getByUsername: getUserByUsername
    }

    function getLookups() {
        log.log('LOG: RestFactory.getLookups');
        return lookupAll.getList();
    }

    function login(data, success, fail) {
        log.log('LOG: UserFactory.login');
        let login = rest.all("users/login");
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
        return userAll.getList();
    }
    
    function getUserByUsername(username) {
        log.log('LOG: UserFactory.getUserByUsername');
        var user = userOne.get({filter: {where: {username: username}}});
        return user;
    }
}