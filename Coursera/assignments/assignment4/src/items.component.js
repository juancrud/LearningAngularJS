(function () {
  'use strict';

  angular.module('MenuApp')
  .component('myItems', {
    templateUrl: 'src/templates/my-items.template.html',
    bindings: {
      items: '<'
    }
  });

})();
