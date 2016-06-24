export function MenuToggleDirective () {
    'ngInject';

    let directive = {
        scope: {
          section: '='
        },
        templateUrl: 'app/components/menuToggle/menu-toggle.html',
        link: link
    };

    function link (scope, element) {
          var controller = element.parent().controller();

          scope.isOpen = function () {
            debugger;
            return controller.isOpen(scope.section);
          };
          scope.toggle = function () {
            controller.toggleOpen(scope.section);
          };
          
          var parentNode = element[0].parentNode.parentNode.parentNode;
          if (parentNode.classList.contains('parent-list-item')) {
            var heading = parentNode.querySelector('h2');
            element[0].firstChild.setAttribute('aria-describedby', heading.id);
          }
        }

    return directive;
}
