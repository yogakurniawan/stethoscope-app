export function config ($logProvider, toastrConfig, $httpProvider, $urlRouterProvider, $urlMatcherFactoryProvider, $locationProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  // Set options third-party lib
  toastrConfig.allowHtml = true;
  toastrConfig.timeOut = 3000;
  toastrConfig.positionClass = 'toast-top-right';
  toastrConfig.preventDuplicates = true;
  toastrConfig.progressBar = true;
  $httpProvider.interceptors.push('authInterceptor');
  $urlRouterProvider.otherwise('/');
	$urlMatcherFactoryProvider.strictMode(false);
	$locationProvider.html5Mode(true);
}
