(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.list = "";
  $scope.feedback = "";
  var comma=','
  $scope.checkList = function () {
  	var numOfItems=filterAndCountItems($scope.list);

  	if(numOfItems==0){
  		$scope.feedback = "Please enter data first";
  		  $scope.color = "red";
  	}
  	else{
  	    $scope.color = "green";
	  	if(numOfItems<=3){
	   	 	$scope.feedback = "Enjoy!";
	   	 }
	   	else
	   	 	$scope.feedback = "Too much!";  
	   	}		
  };
   function filterAndCountItems(list){
  	var items=list.split(comma);
  	var numOfItems=0;
  	for(var i=0;i<items.length;i++)
  		if(items[i]!="")
  			numOfItems++;
  	return numOfItems;
  }
}

})();