export function runBlock($rootScope, $state, $log, Restangular, auth) {
  'ngInject';
  $log.debug('runBlock end');
  $rootScope.$on('$stateChangeStart', authenticate);
  Restangular.setBaseUrl('http://localhost:9000/api/');

  function authenticate(event, toState) {
    // Redirect to login if route requires auth and you're not logged in
    if (!toState.authenticate || toState.name === 'login') {
      return; // no need to redirect
    }

    if (auth.isLoggedIn() === false) {
      event.preventDefault(); // stop current execution
      $state.go('login'); // go to login
    }
  }
}