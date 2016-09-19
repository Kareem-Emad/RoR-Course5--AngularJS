(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.controller('ToBuyShoppingController', ToBuyShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var itemReceiver = this;
  itemReceiver.items = ShoppingListCheckOffService.getToBoughtItems();

}


ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var itemBuyer = this;
  itemBuyer.items = ShoppingListCheckOffService.getToBuyItems();
  itemBuyer.index= 0;
  itemBuyer.buyItem = function () {
    ShoppingListCheckOffService.buyItem(itemBuyer.index);
  }
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItems = [
    { name: "cookies", quantity: 10 },
    { name: "cakes", quantity: 20 },
    { name: "chocolate", quantity: 5 },
    { name: "more cookies", quantity: 15 },
    { name: "more chocolate", quantity: 6 }

  ];
  var boughtItems =[];
  service.buyItem = function (index) {
    boughtItems.push(toBuyItems[index]);
    service.removeItem(index);
  };

  service.removeItem = function (itemIdex) {
    toBuyItems.splice(itemIdex, 1);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };
  service.getToBoughtItems = function () {
    return boughtItems;
  };

}

})();