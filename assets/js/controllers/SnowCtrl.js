ShredApp.controller('SnowCtrl',
  ['$scope','$http','$rootScope','Snow',function
  ($scope, $http, $rootScope, Snow){

  $rootScope.loading = true;
  $scope.snowTrails=[];
  $scope.searchTerm='';

  $scope.searchTrails = function(){
    console.log('searching for: ',$scope.searchTerm);
    var searchQuery = {
      where: {
        or:[
          {name:{contains:$scope.searchTerm}},
          {city:{contains:$scope.searchTerm}}
        ]
      }
    };
    Snow.query().then(function(trail){
      $scope.snowTrails=trail
      $rootScope.loading = false;
    })
  };

}])