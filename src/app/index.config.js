export function config(sideMenuProvider, $mdThemingProvider, $mdIconProvider, $logProvider, toastrConfig, $httpProvider, $urlRouterProvider, $urlMatcherFactoryProvider, $locationProvider) {
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


  sideMenuProvider.addMenuItem({
    name: 'Getting Started',
    state: 'home.gettingstarted',
    type: 'link'
  });

  sideMenuProvider.addMenuItem({
    name: 'Beers',
    type: 'toggle',
    pages: [
      {
        name: 'IPAs',
        type: 'link',
        state: 'home',
        icon: 'fa fa-group'
      },
      {
        name: 'Porters',
        state: 'home.beers.porters',
        type: 'link',
        icon: 'fa fa-map-marker'
      },
      {
        name: 'Wheat',
        state: 'home.beers.wheat',
        type: 'link',
        icon: 'fa fa-plus'
      }
    ]
  });

  sideMenuProvider.addMenuItem({
    name: 'Munchies',
    type: 'toggle',
    pages: [
      {
        name: 'Cheetos',
        type: 'link',
        state: 'munchies.cheetos',
        icon: 'fa fa-group'
      },
      {
        name: 'Banana Chips',
        state: 'munchies.bananachips',
        type: 'link',
        icon: 'fa fa-map-marker'
      },
      {
        name: 'Donuts',
        state: 'munchies.donuts',
        type: 'link',
        icon: 'fa fa-map-marker'
      }
    ]
  });
}
