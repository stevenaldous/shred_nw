ShredApp.controller('DirtShowCtrl',
  ['$scope','$http', '$routeParams','$rootScope','Dirt',function
  ($scope,$http,$routeParams,$rootScope,Dirt){


  $rootScope.loading=true
  $scope.trail={}

  Dirt.get({id: $routeParams.id}).then(function(trail){
    $scope.trail = trail;
    $rootScope.loading=false;
  })

}])
