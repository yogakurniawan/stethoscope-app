export function RealPersonDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/components/realPerson/real-person.html',
        controller: RealPersonController,
        controllerAs: 'realPerson',
        bindToController: true
    };

    return directive;
}

class RealPersonController {
    constructor() {
        'ngInject';
        this.naomi = "test";
    }
}
