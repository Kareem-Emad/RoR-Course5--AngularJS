(function () {
"use strict";

angular.module('public')
.controller('FavoriteDishController', FavoriteDishController);
//inject $http 
FavoriteDishController.$inject = ['$http','ClientInfoService'];

function FavoriteDishController($http,ClientInfoService) {
  var $ctrl = this;
  $ctrl.success=false;
  $ctrl.status=false;
  $ctrl.retrieveDish= function(shortname){
   $http({
	  method: 'GET',
	  //url: 'http://davids-restaurant.herokuapp.com/categories.json',
	  url: ('http://restuarant-in-angular.herokuapp.com/menu_items/'+shortname+'.json'),
	}).then(function successCallback(response) {
	    // this callback will be called asynchronously
	    // when the response is available
	    ClientInfoService.saveMenu(response);
	    $ctrl.success=true;
	    //console.log(response);
	    return response;
	}, function errorCallback(response) {
		$ctrl.status=true;
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });

  }
  $ctrl.pullPersonalData= function(reg){ClientInfoService.savePersonalData(reg.user);}

}

})();