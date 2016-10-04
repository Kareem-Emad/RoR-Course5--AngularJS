(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'itemsComponent.template.html',
  //controller: ShoppingListComponentController,
  bindings: {
    items: '<'//,
    //myTitle: '@title',
    //onRemove: '&'
  }
});

})();