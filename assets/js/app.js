var ShredApp = angular.module('ShredApp', ['ngRoute','sailsResource','ngMessages'])
console.log('its working!')

ShredApp.config(['$routeProvider','$locationProvider','sailsResourceProvider',
  function($routeProvider,$locationProvider,sailsResourceProvider) {


  console.log('in config')


  sailsResourceProvider.configuration = {
    prefix: '',
    verbose: true
  };

  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/',{
    templateUrl: '/views/home.html',
    controller: 'HomeCtrl'
  })
}])