ShredApp.directive('weather', function(){
  return{
    restrict:'A',
    scope:{
      lat:'=lat',
      lon:'=lon'
    },
    controller: ['$scope', '$http', function($scope,$http){
        $scope.weatherData = [];
        $http({
          // 5day forecast URL:http://api.openweathermap.org/data/2.5/forecast

          url:'http://api.openweathermap.org/data/2.5/weather',
          params:{
            lat:$scope.lat,
            lon:$scope.lon,
            units:'imperial'
          }
        }).success(function(data){
          // console.log(data);
          $scope.weatherData.push(data)
          console.log($scope.weatherData[0].weather[0].main)
        })
      }],
      transclude: true,//controller end
      link: function(scope, element, attrs, ctrl, transclude) {
      transclude(scope, function(clone) {
       element.append(clone);
      });
    }
  }
});