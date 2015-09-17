var ShredApp = angular.module('ShredApp', ['ngRoute','sailsResource','ngMessages','ui.bootstrap'])

ShredApp.config(['$routeProvider','$locationProvider','sailsResourceProvider',
  function($routeProvider,$locationProvider,sailsResourceProvider) {


  sailsResourceProvider.configuration = {
    prefix: '/api',
    verbose: true
  };

  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/',{
    templateUrl: '/views/main/home.html',
    controller: 'HomeCtrl'
  })
  .when('/about',{
    templateUrl: '/views/main/about.html',
    controller: 'AboutCtrl'
  })
  .when('/snow',{
    templateUrl: '/views/snow/index.html',
    controller: 'SnowCtrl'
  })
  .when('/dirt',{
    templateUrl: '/views/dirt/index.html',
    controller: 'DirtCtrl'
  })
  .when('/dirt/:id',{
    templateUrl: '/views/dirt/show.html',
    controller: 'DirtShowCtrl'
  })
  .when('/snow/:id',{
    templateUrl: '/views/snow/show.html',
    controller: 'SnowShowCtrl'
  })
  .when('/favorites',{
    templateUrl: '/views/favorites/index.html',
    controller: 'FavoriteCtrl'
  })
  .otherwise({
    templateUrl: '/views/main/404.html'
  })
}])