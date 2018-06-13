(function () {
  'use strict';

  angular.module('MenuData')
    .service('MenuDataService', MenuDataService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

  MenuDataService.$inject = ['$http', 'ApiBasePath']
  function MenuDataService($http, ApiBasePath) {
    var service = this;

    service.getAllCategories = function(){
      return $http({
        method: "GET",
        url: ApiBasePath + "/categories.json"
      }).catch(function (error) {
        console.log("Error retrieving categories: ", error);
      });
    };

    service.getItemsForCategory = function(categoryShortName){
      return $http({
        method: "GET",
        url: ApiBasePath + "/menu_items.json",
        params: {category: categoryShortName}
      }).catch(function (error) {
        console.log("Error retrieving menu items: ", error);
      });
    };

  };

})();
