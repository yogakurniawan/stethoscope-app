export function MenuLinkDirective () {
    'ngInject';

    let directive = {
        scope: {
          section: '=section'
        },
        templateUrl: 'app/components/menuLink/menu-link.html',
        link: link
    };

    function link($scope, $element) {
        var controller = $element.parent().controller();
        $scope.isSelected = function () {
            return controller.isPageSelected($scope.section)
        }

        $scope.focusSection = function () {
          controller.autoFocusContent = true;
        };
    }

    return directive;
}
