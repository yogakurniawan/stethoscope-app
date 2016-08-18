export class MainController {
  constructor($scope, $rootScope, $location, $localStorage, $log, $state) {
    'ngInject';
    let rootScope = $rootScope;
    this.log = $log;
    this.location = $location;
    $scope.realPerson = { name: "hello"};
    this.status = {
      isFirstOpen: true,
      isFirstDisabled: false
    }
    this.userDetail = $localStorage.userDetail;
    rootScope.$on('$locationChangeSuccess', this.onLocationChange);
    $state.go('main.home');
  }

  onLocationChange() {
    // var location = this.location;
    // var path = location.path();
    // var introLink = {
    //   name: "Introduction",
    //   url: "/",
    //   type: "link"
    // };

    // if (path == '/') {
    //   self.selectSection(introLink);
    //   self.selectPage(introLink, introLink);
    //   return;
    // }
  }
}
