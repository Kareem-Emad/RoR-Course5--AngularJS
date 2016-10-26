(function () {
"use strict";
angular.module('public')
.controller('InfoReceiverController', InfoReceiverController);

InfoReceiverController.$inject = ['ClientInfoService','ApiPath'];
function InfoReceiverController(ClientInfoService,ApiPath){
  var $ctrl = this;
  $ctrl.items= ClientInfoService.getMenu(); 
  $ctrl.personaldata= ClientInfoService.getPersonalData();
  $ctrl.basePath=ApiPath;
}
})();