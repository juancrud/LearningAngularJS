(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  // Categories page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/templates/categories.template.html',
    controller: 'CategoriesController as categories',
    resolve: {
      list: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories()
          .then(function(result){
            return result.data;
          });
      }]
    }
  })

  //Items page
  .state('items', {
    url: '/items/{categoryName}',
    templateUrl: 'src/templates/items.template.html',
    controller: 'ItemsController as items',
    resolve: {
      list: ['$stateParams', 'MenuDataService',
        function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.categoryName)
            .then(function (result) {
              return result.data.menu_items;
            });
        }]
    }
  })
  ;

}

})();
