/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { LoginController } from './account/login/login.controller';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { UserFactory } from '../app/components/auth/user.factory';
import { LodashFactory } from '../app/components/lodash/lodash.factory';
import { AuthInterceptorFactory } from '../app/components/auth/authinterceptor.factory';
import { AuthService } from '../app/components/auth/auth.service';
import { SideMenuProvider } from '../app/components/sideMenu/side-menu.provider';
import { SideMenuDirective } from '../app/components/sideMenu/side-menu.directive'
import { MenuLinkDirective } from '../app/components/menuLink/menu-link.directive'
import { MenuToggleDirective } from '../app/components/menuToggle/menu-toggle.directive'

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
  .factory('userFactory', UserFactory)
  .factory('_', LodashFactory)
  .factory('authInterceptor', AuthInterceptorFactory)
  .controller('MainController', MainController)
  .controller('LoginController', LoginController)
  .directive('stNavbar', NavbarDirective)
  .directive('sideMenu', SideMenuDirective)
  .directive('menuLink', MenuLinkDirective)
  .directive('menuToggle', MenuToggleDirective)
