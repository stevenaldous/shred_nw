ShredApp.controller('DirtCtrl',
  ['$scope','$http','$rootScope','Dirt',function
  ($scope, $http, $rootScope, Dirt){


  $rootScope.loading = true;
  $scope.dirtTrails=[];
  $scope.searchTerm='';

  Dirt.query().then(function(trail){
    $scope.dirtTrails=trail
    $rootScope.loading = false;
  })

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

    Dirt.query(searchQuery).then(function(data){
      console.log(data)
      $scope.dirtTrails=data
      $rootScope.loading = false;
      console.log('done')
    })
  }


}])
