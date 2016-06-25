export function SideMenuDirective($rootScope, $mdSidenav, $document) {
    'ngInject';

    let directive = {
        link: link,
        restrict: 'E',
        replace: true,
        templateUrl: 'app/components/sideMenu/side-menu.html',
        controller: SideMenuController,
        controllerAs: 'menu',
        bindToController: true
    };

    function openPage(componentId, mainContentArea) {
        if (mainContentArea) {
            $mdSidenav(componentId)
                .close()
                .then(mainContentArea.focus());
        }
    }

    function link(scope, elem, attrs) {
        var componentId = attrs.mdComponentId || 'mainMenu';
        var mainContentArea = $document[0].querySelector(attrs.mainContent || 'main');
        $rootScope.$on('$locationChangeSuccess', openPage.bind(null, componentId, mainContentArea));
    }

    return directive;
}

class SideMenuController {
    constructor(sideMenu, $mdSidenav, auth, $location) {
        'ngInject';
        // view model bindings
        this.auth = auth;
        this.sidenavId = 'sideMenu';
        // this.items = _.sortBy(sideMenu.getMenu(), 'order');
        this.sections = sideMenu.getMenu();
    }

    close() {
        return $mdSidenav(this.sidenavId).close();
    }

    canAccess(menuItem) {
        // if (menuItem.role) {
        //     return Auth.hasRole(menuItem.role);
        // }

        return true;
    }

    logout() {
        this.close().then(this.auth.logout);
    }
}
