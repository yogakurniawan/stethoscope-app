describe('Controllers:: main.controllers', () => {
  let vm, isSelected;

  beforeEach(angular.mock.module('stethoscope'));

  beforeEach(inject(($controller) => {
    vm = $controller('MainController');
    spyOn(vm, 'toggleOpen');
    spyOn(vm, 'isSelected').and.returnValue(false);
    spyOn(vm, 'selectPage');
    spyOn(vm, 'isPageSelected');
  }));

  it('tracks that toggleOpen was called', () => {
    vm.toggleOpen('home');
    expect(vm.toggleOpen).toHaveBeenCalledWith('home');
  });

  it('tracks that isSelected was called', () => {
    isSelected = vm.isSelected();
    expect(vm.isSelected).toHaveBeenCalled;
  });

  it('when isSelected is called returns the requested value', () => {
    isSelected = vm.isSelected();
    expect(openedSection).toEqual(false);
  });

  it('it should not affect vm.openedSection value', () => {
    vm.toggleOpen('home');
    expect(vm.openedSection).toEqual(null);
  });

  it('tracks that toggleOpen was called', () => {
    vm.toggleOpen('home');
    expect(vm.toggleOpen).toHaveBeenCalledWith('home');
  });
  // it('should have a timestamp creation date', () => {
  //   expect(vm.creationDate).toEqual(jasmine.any(Number));
  // });

  // it('should define animate class after delaying timeout', inject($timeout => {
  //   $timeout.flush();
  //   expect(vm.classAnimation).toEqual('rubberBand');
  // }));

  // it('should show a Toastr info and stop animation when invoke showToastr()', inject(toastr => {
  //   vm.showToastr();
  //   expect(toastr.info).toHaveBeenCalled();
  //   expect(vm.classAnimation).toEqual('');
  // }));

  // it('should define more than 5 awesome things', () => {
  //   expect(angular.isArray(vm.awesomeThings)).toBeTruthy();
  //   expect(vm.awesomeThings.length === 5).toBeTruthy();
  // });
});
