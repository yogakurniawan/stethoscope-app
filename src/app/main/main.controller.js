export class MainController {
  constructor(userFactory, $log) {
    'ngInject';

    this.log = $log;
    this.user = userFactory;
    this.openedSection = null;
    // this.location = $location;
    this.autoFocusContent = false;
    this.status = {
      isFirstOpen: true,
      isFirstDisabled: false
    }
  }

  toggleOpen(section) {
    this.openedSection = (this.openedSection === section ? null : section);
  }

  isOpen(section) {
    return this.openedSection === section;
  }

  selectPage(section, page) {
    var location = this.location;
    page && page.url && location.path(page.url);
    this.currentSection = section;
    this.currentPage = page;
  }
}
