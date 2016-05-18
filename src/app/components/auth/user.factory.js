export function UserFactory (Restangular, $log) {
    'ngInject'
    var rest = Restangular;
    var baseUsers = rest.all('users');
    var log = $log;
    
    return {
        login: login
    }
    
    function login (data, success, fail) {
        baseUsers.post("login", data).then(function() {
            typeof success === "function" && success();
            log.log("Login success!!");
        }, function() {
            typeof fail === "function" && fail();
            log.log("Login failed!!");
        });
    }
}