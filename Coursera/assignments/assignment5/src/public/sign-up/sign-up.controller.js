(function () {
  "use strict";

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MenuService', 'SignUpService'];
  function SignUpController(MenuService, SignUpService) {
    var $ctrl = this;
    $ctrl.showSuccess = false;
    $ctrl.menuItem = {};

    //TEST
    // $ctrl.firstName = "Juan Carlos";
    // $ctrl.lastName = "Rudin";
    // $ctrl.emailAddress = "juancrud@gmail.com";
    // $ctrl.phoneNumber = "123-123-1234";
    // $ctrl.favoriteDish = "L1";
    //END TEST

    $ctrl.submit = function(){
      $ctrl.showSuccess = $ctrl.menuItem != null;
      if (!$ctrl.showSuccess) return;

      var signUpData = {
        firstName: $ctrl.firstName,
        lastName: $ctrl.lastName,
        emailAddress: $ctrl.emailAddress,
        phoneNumber: $ctrl.phoneNumber,
        menuItem: $ctrl.menuItem
      };
      SignUpService.saveData(signUpData);
    };

    $ctrl.validateMenuItem = function(){
      MenuService.getMenuItem($ctrl.favoriteDish)
        .then(function(response) {
          $ctrl.menuItem = response;
          console.log(response);
        })
        .catch(function(error){
          $ctrl.menuItem = null;
        });
    };
  }

})();
