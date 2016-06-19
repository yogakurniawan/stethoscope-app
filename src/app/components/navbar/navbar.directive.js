export function NavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    scope: {
        creationDate: '='
    },
    controller: NavbarController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class NavbarController {
  constructor (auth, $mdSidenav) {
    'ngInject';
    this.sideNavId = 'sideMenu';
    this.auth = auth;
    this.mdSidenav = $mdSidenav;
  }

  openMainMenu () {
    var sideNav = this.mdSidenav;
    return sideNav(this.sideNavId).open();
  }
}
