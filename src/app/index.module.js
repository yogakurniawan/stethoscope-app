/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { LoginController } from './account/login/login.controller';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';
import { UserService } from '../app/components/auth/user.service';
import { UserFactory } from '../app/components/auth/user.factory';
import { AuthInterceptor } from '../app/components/auth/authinterceptor.factory';

angular.module('stethoscope', 
    [
      'ngStorage',
      'ngAnimate', 
      'ngCookies', 
      'ngTouch', 
      'ngSanitize', 
      'ngMessages', 
      'ngAria', 
      'restangular', 
      'ui.router', 
      'ngMaterial', 
      'toastr'
    ]
  )
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .config(function($mdThemingProvider){
    $mdThemingProvider.definePalette('darkGreen', {
      '50': 'ffebee',
      '100': 'ffcdd2',
      '200': 'ef9a9a',
      '300': 'rgb(33, 89, 89)',
      '400': 'ef5350',
      '500': 'rgb(33, 89, 89)',
      '600': 'e53935',
      '700': 'd32f2f',
      '800': 'rgb(33, 89, 89)',
      '900': 'b71c1c',
      'A100': 'rgb(33, 89, 89)',
      'A200': 'ff5252',
      'A400': 'ff1744',
      'A700': 'd50000',
      'contrastDefaultColor': 'light'
    });
    $mdThemingProvider.theme('stethoscopeTheme')
      .primaryPalette('darkGreen');
  })
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .service('user', UserService)
  .factory('userFactory', UserFactory)
  .factory('authInterceptor', AuthInterceptor)
  .controller('MainController', MainController)
  .controller('LoginController', LoginController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective);
