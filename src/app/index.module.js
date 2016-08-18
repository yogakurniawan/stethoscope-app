/* global moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { LoginController } from './account/login/login.controller';
import { RegistrationController } from './account/registration/registration.controller';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { RestFactory } from '../app/components/rest/rest.factory';
import { AuthInterceptorFactory } from '../app/components/auth/authinterceptor.factory';
import { AuthService } from '../app/components/auth/auth.service';
import { SideMenuProvider } from '../app/components/sideMenu/side-menu.provider';
import { SideMenuDirective } from '../app/components/sideMenu/side-menu.directive'
import { RealPersonDirective } from '../app/components/realPerson/real-person.directive'

angular.module('stethoscope', 
    [
      'angular-loading-bar',
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
      'toastr',
      'ngMdIcons'
    ]
  )
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .provider('sideMenu', SideMenuProvider)
  .service('webDevTec', WebDevTecService)
  .service('auth', AuthService)
  .factory('_', function($window){
      return $window._;
  })
  .factory('restFactory', RestFactory)
  .factory('authInterceptor', AuthInterceptorFactory)
  .controller('MainController', MainController)
  .controller('LoginController', LoginController)
  .controller('RegistrationController', RegistrationController)
  .directive('stNavbar', NavbarDirective)
  .directive('stSideMenu', SideMenuDirective)
  .directive('realPerson', RealPersonDirective)
