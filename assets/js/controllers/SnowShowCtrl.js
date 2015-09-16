ShredApp.controller('SnowShowCtrl',
  ['$scope','$http', '$routeParams','$rootScope','Snow',function
  ($scope,$http,$routeParams,$rootScope,Snow){


  $rootScope.loading=true
  $scope.trail={}

  Snow.get({id: $routeParams.id}).then(function(trail){
    $scope.trail = trail;
    $rootScope.loading=false;
  })

}])