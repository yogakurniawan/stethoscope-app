export function AuthInterceptor ($q, $location, $timeout, $localStorage, $log) {
    'ngInject';
    var storage = $localStorage;
    var log = $log;
    var q = $q;
    var timeout = $timeout;
    var location = $location;
    
    return {
        request: function (config) {
            log.log("LOG: AuthInterceptor.request");
            config.params = config.params || {};
            var token = storage.token;
            if (token) {
                config.params.access_token = token;
            }            
            return config;
        },
        responseError: function (response) {
            log.log("LOG: AuthInterceptor.responseError");
            if (response.status === 401) {
                // remove any stale tokens
                delete storage.token;

                // use timeout to perform location change
                // in the next digest cycle
                timeout(function () {
                    location.path('/login');
                }, 0);
                return q.reject(response);
            }
            return q.reject(response);
        }
    }
}