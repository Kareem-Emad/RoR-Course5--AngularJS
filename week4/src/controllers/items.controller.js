(function () {
'use strict';

angular.module('MenuApp')
.controller('itemsController', itemsController);

itemsController.$inject = ['promise'];
function itemsController(promise) {
	var menu = this;
	menu.items = promise.data.menu_items;
}
})();