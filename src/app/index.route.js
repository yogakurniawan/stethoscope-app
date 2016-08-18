export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main',
      authenticate: true
    })
    .state('main.home', {
      templateUrl: 'app/main/home.html',
      authenticate: true
    })
    .state('registration', {
      url: '/registration',
      templateUrl: 'app/account/registration/registration.html',
      controller: 'RegistrationController',
      controllerAs: 'reg'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'app/account/login/login.html',      
      controller: 'LoginController',
      controllerAs: 'login'
    });

  $urlRouterProvider.otherwise('/');
}
