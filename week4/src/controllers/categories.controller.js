(function () {
'use strict';

angular.module('MenuApp')
.controller('categoriesController', categoriesController);

categoriesController.$inject = ['promise'];
function categoriesController(promise) {
	var menu = this;
	menu.categories = promise.data;
}
})();