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
        rootScope.$on('$locationChangeSuccess', function () {
            $log.log('location success event listener is called');
        });
        this.userFullName = $localStorage.userData.fullname;
        this.openedSection = null;
        this.currentSection = null;
        this.currentPage = null;
        this.autoFocusContent = false;
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

    toggleOpen(section) {
        this.openedSection = (this.openedSection === section ? null : section);
    }

    isSelected(section) {
        return this.openedSection === section;
    }

    selectPage(section, page) {
        this.currentSection = section;
        this.currentPage = page;
    }

    isPageSelected(page) {
        return this.currentPage === page
    }

    focusSection() {
        this.autoFocusContent = true;
    }
}
