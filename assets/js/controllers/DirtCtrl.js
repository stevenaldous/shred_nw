ShredApp.controller('DirtCtrl',
  ['$scope','$http','$rootScope','Dirt',function
  ($scope, $http, $rootScope, Dirt){


  $rootScope.loading = true;
  $scope.dirtTrails=[]

  Dirt.query().then(function(trail){
    console.log(trail)
    $scope.dirtTrails=trail
    $rootScope.loading = false;
  })








}])
