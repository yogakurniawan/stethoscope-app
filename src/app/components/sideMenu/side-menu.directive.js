export function SideMenuDirective() {
    'ngInject';
    
    let directive = {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/components/sideMenu/side-menu.html',
        controller: SideMenuController,
        controllerAs: 'menu',
        bindToController: true
    };

    return directive;
}

class SideMenuController {
    constructor(_, sideMenu, $rootScope, $log, $mdSidenav, auth, $location, $localStorage) {
        'ngInject';
        // view model bindings
        let rootScope = $rootScope;
        this.sideNav = $mdSidenav;
        this.auth = auth;
        this.sidenavId = 'sideMenu';
        this.sections = _.sortBy(sideMenu.getMenu(), 'order');
        rootScope.$on('$locationChangeSuccess', function(){
            $log.log('location success event listener is called');
        });
        this.userFullName = $localStorage.userData.fullname;
    }

    close() {
        let sideNav = this.sideNav;
        return sideNav(this.sidenavId).close();
    }

    canAccess() {
        // if (menuItem.role) {
        //     return Auth.hasRole(menuItem.role);
        // }

        return true;
    }

    logout() {
        this.close().then(this.auth.logout);
    }
}
