export class RegistrationController {
  constructor($log, $state, restFactory) {
    'ngInject';
    this.log = $log;
    this.restFactory = restFactory;
    this.state = $state;
    this.titleList = null;
  }

  login() {
    var state = this.state;
    state.go('login');
  }

  loadLookups() {
    var that = this;
    var rest = this.restFactory;
    if (that.titleList) {
      return;
    }
    return rest.listLookups().then(function(res){
      that.titleList = that.titleList || res.plain();
    });
  }
}