ShredApp.controller('DirtCtrl',['$scope','$http',function($scope,$http){
  console.log('Dirt Index')

  $scope.dirtTrails=[]

  console.log('getting dirt')

  return $http({
    url:'/api/dirt'
  }).then(function(data){
    console.log(data.data.places)
    $scope.dirtTrails = data.data.places
  });

  console.log("dirtTrails: ", $scope.dirtTrails)
}])
