export function RealPersonDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/components/sideMenu/side-menu.html',
        controller: RealPersonController,
        controllerAs: 'realPerson',
        bindToController: true
    };

    return directive;
}

class RealPersonController {
    constructor() {
        'ngInject';
    }
}
