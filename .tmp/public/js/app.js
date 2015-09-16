var ShredApp = angular.module('ShredApp', ['ngMaterial','ngRoute','sailsResource','ngMessages','ui.bootstrap'])

ShredApp.config(['$routeProvider','$locationProvider','sailsResourceProvider',
  function($routeProvider,$locationProvider,sailsResourceProvider) {


  sailsResourceProvider.configuration = {
    prefix: '/api',
    verbose: true
  };

  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/',{
    templateUrl: '/views/home.html',
    controller: 'HomeCtrl'
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
  .otherwise({
    templateUrl: 'views/404.html'
  })
}])