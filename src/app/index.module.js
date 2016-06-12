/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { LoginController } from './account/login/login.controller';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { UserFactory } from '../app/components/auth/user.factory';
import { AuthInterceptor } from '../app/components/auth/authinterceptor.factory';
import { Auth } from '../app/components/auth/auth.service';

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
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('webDevTec', WebDevTecService)
  .service('auth', Auth)
  .factory('userFactory', UserFactory)
  .factory('authInterceptor', AuthInterceptor)
  .controller('MainController', MainController)
  .controller('LoginController', LoginController)
  .directive('stNavbar', NavbarDirective)
