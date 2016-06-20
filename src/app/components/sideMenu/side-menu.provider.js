export class SideMenuProvider {
  constructor() {
    this.menu = [];
    this.$get = function sideMenuFactory() {
      return new sideMenu(this);
    };

    function sideMenu(arg) {
      this.getMenu = getMenu.bind(arg);

      function getMenu() {
        return this.menu;
      }
    }
  }

  setMenu(newMenu) {
    this.menu = newMenu;
	}

  addMenuItem(menuData) {
    this.menu.push(menuData);
	}

  addSubMenuItem(parent, menuData) {
    var menuItem = _.find(this.menu, { state: parent });
    if (menuItem) {
      menuItem.subItems = menuItem.subItems || [];
      menuItem.subItems.push(menuData);
    }
	}
}