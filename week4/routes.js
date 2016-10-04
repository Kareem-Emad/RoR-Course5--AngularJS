(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'home.template.html'
  })

  // Premade list page
  
  .state('categories', {
    url: '/categories',
    templateUrl: 'categories.template.html' ,
    controller: 'categoriesController as menu',

    resolve: {
      promise: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
    
  })
  .state('items', {
    url: '/items/{categoryName}',
    templateUrl: 'items.template.html' ,
    controller: 'itemsController as itemsMenu',

    resolve: {
      promise: ['$stateParams','MenuDataService', function ($stateParams,MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.categoryName);
      }]
    }
    
  });



}

})();