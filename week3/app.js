(function () {
'use strict';
angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
	var menu=this;
	menu.found=[];
	menu.keyword="";
	menu.getMatches = function(searchTerm){
		var promise=MenuSearchService.getMatchedMenuItems(searchTerm);
		promise.then(function (response) {
    		menu.found = response;
  		});
	};
  menu.removeItem = function (itemIndex) {
    menu.found.splice(itemIndex,1);
  };
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http){
	var service=this;
	service.getMatchedMenuItems = function (searchTerm) {
		return $http({
     		method: "GET",
      		url: "https://davids-restaurant.herokuapp.com/menu_items.json"
    	})
    	.then(function (result) {
    	// process result and only keep items that match
      if(searchTerm=="")
        return null;
    	var found=[];
    	var descriptions=result.data.menu_items;
    	for(var i=0;i<descriptions.length;i++){
    		if(descriptions[i].description.includes(searchTerm))
      			found.push(descriptions[i]);
      	}
   		//return foundItems;
   		return found;
		});
	};


}
function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'template.html',
    scope: {
      found: '<',
      onRemove: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'menu',
    bindToController: true
  };

  return ddo;
}


})();