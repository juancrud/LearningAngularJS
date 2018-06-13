(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController (MenuSearchService) {
    var narrowItDown = this;
    narrowItDown.found = [];
    narrowItDown.searchTerm = "";

    narrowItDown.narrowMenuItems = function() {
      MenuSearchService.getMatchedMenuItems(narrowItDown.searchTerm)
        .then(function(result){
            narrowItDown.found = result;
        });
    };

    narrowItDown.removeMenuItem = function(idx) {
      narrowItDown.found.splice(idx, 1);
    };
  };

  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath){
    var service = this;

    service.getMatchedMenuItems = function(searchTerm){
      return $http({
        method: "GET",
        url: ApiBasePath + "/menu_items.json"
      }).then(function (response) {
        var foundItems = response.data.menu_items;
        return filterMenuItems(foundItems, searchTerm);
      }).catch(function (error) {
        console.log("Error retrieving categories: ", error);
      });
    };

    var filterMenuItems = function(menuItems, searchTerm){
      var keywords = searchTerm.toLowerCase().split(" ").filter(x => x !== "");
      var result = [];
      for(var i = 0; i < menuItems.length; i++){
        var menuItem = menuItems[i];
        var pushMenuItem = false;
        for(var j = 0; j < keywords.length; j++){
          var keyword = keywords[j];
          if(menuItem.description.toLowerCase().indexOf(keyword) >= 0){
            pushMenuItem = true;
          }
          else{
            pushMenuItem = false;
            continue;
          }
        }
        if(pushMenuItem){
          result.push(menuItem);
        }
      }
      return result;
    };
  };

  function FoundItemsDirective() {
    var ddo = {
      restrict: 'E',
      templateUrl: 'foundItemsTemplate.html',
      scope: {
        foundItems: '<',
        onRemove: '&'
      },
      controller: FoundItemsController,
      controllerAs: 'ctrl',
      bindToController: true
    };

    return ddo;
  }

  function FoundItemsController() {
    var foundItems = this;

  };

})();
