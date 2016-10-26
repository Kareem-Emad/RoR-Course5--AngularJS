(function () {
	"use strict";
	angular.module('public')
	.service('ClientInfoService', ClientInfoService);


  function ClientInfoService() {
  var service = this;
  service.personaldata=[];
  service.saveMenu= function (response){
	  service.items= response.data;
	  //console.log(service.items);
  }
  service.getMenu = function () {
  	return service.items;
  }
  service.savePersonalData = function (user){
    service.personaldata.push(user.firstname);
    service.personaldata.push(user.lastname);
    service.personaldata.push(user.email);
    service.personaldata.push(user.shortname);
    /*
    service.firstname=user.firstname;
    service.lastname=user.lastname;
    service.email=user.email;
    service.itemCode=user.shortname;
    */
  }
  service.getPersonalData = function (){
    return service.personaldata;
  }
  }
})();