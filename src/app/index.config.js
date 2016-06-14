export function config ($mdThemingProvider, $mdIconProvider, $logProvider, toastrConfig, $httpProvider, $urlRouterProvider, $urlMatcherFactoryProvider, $locationProvider) {
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
  var spritePath = 'bower_components/material-design-icons/sprites/svg-sprite/';
  $mdIconProvider.iconSet('navigation', spritePath + 'svg-sprite-navigation.svg');
  $mdIconProvider.iconSet('action', spritePath + 'svg-sprite-action.svg');
  $mdIconProvider.iconSet('content', spritePath + 'svg-sprite-content.svg');
  $mdIconProvider.iconSet('toggle', spritePath + 'svg-sprite-toggle.svg');
  $mdIconProvider.iconSet('alert', spritePath + 'svg-sprite-alert.svg');
  $mdThemingProvider.theme('default')
      .primaryPalette('teal')
      .accentPalette('light-green')
      .warnPalette('amber')
}
