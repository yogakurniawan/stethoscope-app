/**
 * @todo Complete the test
 * This example is not perfect.
 * Test should check if MomentJS have been called
 */
describe('directive navbar', function () {
  let vm;
  let element;
  let timeInMs;

  beforeEach(angular.mock.module('stethoscope'));

  beforeEach(inject(($compile, $rootScope) => {
    element = angular.element('<st-navbar></st-navbar>');

    $compile(element)($rootScope.$new());
    $rootScope.$digest();
    vm = element.isolateScope().vm;
  }));

  it('should be compiled', () => {
    expect(element.html()).not.toEqual(null);
  });

  // it('should have isolate scope object with instanciate members', () => {
  //   expect(vm).toEqual(jasmine.any(Object));

  //   expect(vm.creationDate).toEqual(jasmine.any(Number));
  //   expect(vm.creationDate).toEqual(timeInMs);

  //   expect(vm.relativeDate).toEqual(jasmine.any(String));
  //   expect(vm.relativeDate).toEqual('a day ago');
  // });
});
