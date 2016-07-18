/**
 * @todo Complete the test
 * This example is not perfect.
 * Test should check if MomentJS have been called
 */
describe('directive navbar', function () {
  let vm;
  let element;
  let scope;

  beforeEach(angular.mock.module('stethoscope'));

  beforeEach(inject(($compile, $httpBackend, $rootScope) => {
    $httpBackend.when('GET','bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-navigation.svg').respond('ok');
    element = angular.element('<st-navbar></st-navbar>');
    scope = $rootScope;
    $compile(element)($rootScope.$new());
    scope.$digest();
    vm = element.isolateScope().vm;
  }));

  it('should be compiled', () => {
    expect(element.html()).not.toEqual(null);
  });

  it('should have .st-navbar-logo', () => {
    var logo = element[0].querySelectorAll('.st-navbar-logo');
    var elementExist = angular.element(logo).hasClass('st-navbar-logo');
    expect(elementExist).toBe(true);
  });

  // it('should have isolate scope object with instanciate members', () => {
  //   expect(vm).toEqual(jasmine.any(Object));

  //   expect(vm.creationDate).toEqual(jasmine.any(Number));
  //   expect(vm.creationDate).toEqual(timeInMs);

  //   expect(vm.relativeDate).toEqual(jasmine.any(String));
  //   expect(vm.relativeDate).toEqual('a day ago');
  // });
});
