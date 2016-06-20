export function MenuLinkDirective () {
    'ngInject';

    let directive = {
        scope: {
          section: '='
        },
        templateUrl: 'app/components/menuLink/menu-link.html',
        link: link
    };

    function link($scope, $element, attrs) {
        var controller = $element.parent().controller();
        $scope.focusSection = function () {
          // set flag to be used later when
          // $locationChangeSuccess calls openPage()
          controller.autoFocusContent = true;
        };
    }

    return directive;
}
