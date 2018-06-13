(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);;

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController (ShoppingListCheckOffService) {
    var toBuy = this;
    toBuy.items = ShoppingListCheckOffService.getToBuyList();

    toBuy.checkOffItem = function(idx){
        ShoppingListCheckOffService.checkOffItem(idx);
    };
  };

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController (ShoppingListCheckOffService){
    var alreadyBought = this;
    alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtList();


  };

  function ShoppingListCheckOffService(){
    var service = this;

    var toBuyList = [
      {name: "Cookies", quantity: 10},
      {name: "Sodas", quantity: 3},
      {name: "Chocolates", quantity: 2},
      {name: "Chips", quantity: 5},
      {name: "Tortillas", quantity: 2},
      {name: "Bulbs", quantity: 9}
    ];
    var alreadyBoughtList = [];

    service.getToBuyList = function(){
      return toBuyList;
    };

    service.getAlreadyBoughtList = function(){
        return alreadyBoughtList;
    };

    service.checkOffItem = function(itemIdx){
      var removedItems = toBuyList.splice(itemIdx, 1);
      alreadyBoughtList.push(removedItems[0]);
    };

  };

})();
