export class MainController {
  constructor($rootScope, $location, userFactory, $log) {
    'ngInject';

    this.log = $log;
    this.user = userFactory;
    this.openedSection = null;
    this.location = $location;
    this.autoFocusContent = false;
    this.status = {
      isFirstOpen: true,
      isFirstDisabled: false
    }
    $rootScope.$on('$locationChangeSuccess', this.onLocationChange);
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

  toggleOpen(section) {
    this.openedSection = (this.openedSection === section ? null : section);
  }

  isSelected(section) {
    return this.openedSection === section;
  }

  selectPage(section, page) {
    this.currentSection = section;
    this.currentPage = page;
  }

  isPageSelected(page) {
    return this.currentPage === page
  }
}
