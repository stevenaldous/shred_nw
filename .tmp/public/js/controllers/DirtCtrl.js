ShredApp.controller('DirtCtrl',['$scope','$http',function($scope,$http){
  console.log('Dirt Index')

  $scope.trails = []

  var req={
    url:"https://outdoor-data-api.herokuapp.com/api.json",
    params:{
      'api_key':"6aa766282b6b6986e9a201a0ad0c0ea7",
      'q[activities_activity_type_name_cont]':'mountain biking',
      'q[city_cont]':"seattle"
    }
  }

  $http(req).success(function(data){
    $scope.dirt = data.Search;
  });
  }])
