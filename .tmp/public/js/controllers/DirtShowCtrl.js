ShredApp.controller('DirtShowCtrl',
  ['$scope','$http', '$routeParams','$rootScope','Dirt',function
  ($scope,$http,$routeParams,$rootScope,Dirt){

  console.log('Dirt Index')

  $rootScope.loading=true
  $scope.trail={}
  console.log('getting dirt')

  Dirt.get({id: $routeParams.id}).then(function(trail){
    console.log(trail)
    $scope.trail = trail;
    $rootScope.loading=false;
  })

}])
