(function () {
  "use strict";

  angular.module('public')
    .service('SignUpService', SignUpService);

  SignUpService.$inject = [];
  function SignUpService() {
    var service = this;
    service.signUpData = null;

    service.getData = function () {
      return service.signUpData;
    };

    service.saveData = function (signUpData) {
      service.signUpData = signUpData;
    };
  }
})();
