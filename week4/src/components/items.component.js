(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/templates/itemsComponent.template.html',
  bindings: {
    items: '<'
  }
});

})();