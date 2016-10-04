(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'categoriesComponent.template.html',
  //controller: ShoppingListComponentController,
  bindings: {
    items: '<'//,
    //myTitle: '@title',
    //onRemove: '&'
  }
});

})();