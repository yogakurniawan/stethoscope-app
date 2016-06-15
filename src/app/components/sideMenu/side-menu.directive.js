export function SideMenuDirective() {
    'ngInject';

    let directive = {
        link: link,
        restrict: 'E',
        replace: true,
        templateUrl: 'app/components/sideMenu/side-menu.html',
        controller: SideMenuController,
        controllerAs: 'vm',
        bindToController: true
    };

    function openPage() {
        $mdSidenav(componentId)
            .close()
            .then(mainContentArea.focus());
    }
    // directives link definition
    function link(scope, elem, attrs) {
        var componentId = attrs.mdComponentId || 'mainMenu';
        var mainContentArea = $document[0].querySelector(attrs.mainContent || 'main');
        $rootScope.$on('$locationChangeSuccess', openPage);
    }

    return directive;
}

class SideMenuController {
    constructor() {
        'ngInject';
    }
}
