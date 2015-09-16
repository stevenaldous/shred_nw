ShredApp.controller('SnowCtrl',
  ['$scope','$http','$rootScope','Snow',function
  ($scope, $http, $rootScope, Snow){

  $rootScope.loading = true;
  $scope.snowTrails=[]

  Snow.query().then(function(trail){
    $scope.snowTrails=trail
    $rootScope.loading = false;
  })

}])