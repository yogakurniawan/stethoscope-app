describe('Controllers:: main.controllers', () => {
  let vm, isSelected, isPageSelected;

  beforeEach(angular.mock.module('stethoscope'));

  beforeEach(inject(($controller) => {
    vm = $controller('MainController');
    spyOn(vm, 'toggleOpen').and.callThrough();
    spyOn(vm, 'isSelected').and.callThrough();
    spyOn(vm, 'selectPage').and.callThrough();
    spyOn(vm, 'isPageSelected').and.callThrough();
  }));

  it('should ensure controller.openedSection has the correct value', () => {
    vm.toggleOpen('home');
    expect(vm.openedSection).toEqual('home');
    expect(vm.toggleOpen).toHaveBeenCalledWith('home');
  });

  it('should ensure controller.openedSection has the correct value when triggered from controller.isSelected', () => {
    vm.toggleOpen('main');
    isSelected = vm.isSelected('main');
    expect(vm.openedSection).toEqual('main');
    expect(isSelected).toEqual(true);
    expect(vm.isSelected).toHaveBeenCalled;
  });

  it('should set vm.currentSection with "subscription" and vm.currentPage with "user"', () => {
    vm.selectPage('subscription', 'user');
    expect(vm.currentSection).toEqual('subscription');
    expect(vm.currentPage).toEqual('user');
    expect(vm.selectPage).toHaveBeenCalledWith('subscription', 'user');
  });

  it('should ensure controller.currentPage has the correct value', () => {
    vm.selectPage('subscription', 'user');
    isPageSelected = vm.isPageSelected('user');
    expect(isPageSelected).toBe(true);
    expect(vm.isPageSelected).toHaveBeenCalled;
  });
});
