export class MainController {
  constructor($rootScope, $location, $localStorage, $log) {
    'ngInject';
    let rootScope = $rootScope;
    this.log = $log;
    this.location = $location;
    this.status = {
      isFirstOpen: true,
      isFirstDisabled: false
    }
    this.userDetail = $localStorage.userDetail;
    rootScope.$on('$locationChangeSuccess', this.onLocationChange);
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
