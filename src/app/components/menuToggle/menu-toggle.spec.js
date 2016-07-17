describe('directive menu toggle', function () {
  let compile, scope;

  beforeEach(angular.mock.module('stethoscope'));

  beforeEach(() => {
    inject(($compile, $rootScope) => {
      compile = $compile;
      scope = $rootScope.$new();
    });
  });

  it('Should call parent directive whatever it is supposed to', function () {
    var sectionObj = {
      name: 'Subscription',
      type: 'toggle',
      pages: [
        {
          name: 'Users',
          type: 'link',
          state: 'home'
        },
        {
          name: 'Practices',
          state: 'home.beers.porters',
          type: 'link'
        }
      ]
    };
    var parentController = {
      openedSection: null,
      isSelected: function (section) {
        return this.openedSection === section;
      },
      toggleOpen: function (section) {
        this.openedSection = (this.openedSection === section ? null : section);
      }
    }

    spyOn(parentController, 'isSelected').and.callThrough();
    spyOn(parentController, 'toggleOpen').and.callThrough();

    var element = angular.element('<div><menu-toggle><menu-toggle></div>');
    element.data('$parentController', parentController);
    scope.section = sectionObj;
    scope.isSelected = function () {
      return parentController.isSelected(scope.section);
    };
    scope.toggle = function () {
      parentController.toggleOpen(scope.section);
    };
    compile(element)(scope);
    var menuToggleScope = element.find('menu-toggle').scope();
    // Act
    menuToggleScope.toggle();
    var isSelected = menuToggleScope.isSelected();

    //Assert
    expect(isSelected).toEqual(true);
    expect(menuToggleScope.isSelected).not.toEqual(undefined);
    expect(parentController.isSelected).toHaveBeenCalled();
    expect(parentController.toggleOpen).toHaveBeenCalled();
  });
});