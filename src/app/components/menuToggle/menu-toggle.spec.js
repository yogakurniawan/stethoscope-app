describe('directive menu toggle', function () {
  let compile, scope, directiveElem, log;

  beforeEach(angular.mock.module('stethoscope'));

  beforeEach(() => {
    inject(($compile, $rootScope, $log) => {
      compile = $compile;
      scope = $rootScope.$new();
      log = $log;
    });

    directiveElem = getCompiledElement();
  });

  function getCompiledElement() {
    var element = angular.element('<menu-toggle></menu-toggle');
    scope.test = 'hello';
    var compiledElement = compile(element)(scope);
    return compiledElement;
  }

  it('should have md-button element', function () {
    log.log(directiveElem);
    var mdButtonElement = directiveElem.find('md-button');
    log.log(mdButtonElement);
    expect(mdButtonElement).toBeDefined();
  });

  it('should have mock controller', function () {
    var scope = directiveElem.scope();
    expect(scope).toBeDefined();
    expect(scope.test).toEqual('hello');
  });
});