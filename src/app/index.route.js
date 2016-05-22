export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main',
      authenticate: true
    })
    .state('login', {
      url: '/login',
      templateUrl: 'app/account/login/login.html',      
      controller: 'LoginController',
      controllerAs: 'login'
    });

  $urlRouterProvider.otherwise('/');
}
