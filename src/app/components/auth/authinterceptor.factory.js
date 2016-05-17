export function AuthInterceptor ($localStorage, $log) {
    'ngInject';
    var storage = $localStorage;
    var log = $log;
    
    return {
        request: function (config) {
            config.headers = config.headers || {};
            var token = storage.token;
            if (token) {
                config.headers.Authorization = 'Bearer ' + token;
            }
            log.log("called");
            return config;
        },
        responseError: function (response) {
            if (response.status === 401) {
                // remove any stale tokens
                delete storage.token;

                // use timeout to perform location change
                // in the next digest cycle
                $timeout(function () {
                    $location.path('/login');
                }, 0);
                log.log("called");
                return $q.reject(response);
            }
            return $q.reject(response);
        }
    }
}