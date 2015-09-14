var ShredApp = angular.module('ShredApp', ['ngMaterial','ngRoute','sailsResource','ngMessages'])
console.log('its working!')

ShredApp.config(['$routeProvider','$locationProvider','sailsResourceProvider',
  function($routeProvider,$locationProvider,sailsResourceProvider) {


  console.log('in config')


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
  .when('/',{
    templateUrl: '/views/home.html',
    controller: 'HomeCtrl'
  })
  .otherwise({
    templateUrl: 'views/404.html'
  })
}])