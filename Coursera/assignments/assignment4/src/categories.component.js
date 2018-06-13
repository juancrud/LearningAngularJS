(function () {
  'use strict';

  angular.module('MenuApp')
  .component('myCategories', {
    templateUrl: 'src/templates/my-categories.template.html',
    bindings: {
      categories: '<'
    }
  });

})();
