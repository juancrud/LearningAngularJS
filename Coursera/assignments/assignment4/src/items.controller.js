(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['list'];
  function ItemsController(list) {
    var controller = this;
    controller.list = list;
  };

})();
