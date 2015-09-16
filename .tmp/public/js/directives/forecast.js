//this directive goes to OpenWeather API and fetches the 5-day forecast
ShredApp.directive('forecast', function(){
  return{
    restrict:'E',
    scope:{
      lat:'=lat',
      lon:'=lon'
    },
    controller: ['$scope', '$http', '$timeout', function($scope,$http, $timeout){
        $scope.weatherData = [];
        $scope.loading = false;
        var fetchWeather = function() {
          console.log('fetchWeather 1');
          if($scope.loading || !$scope.lat || !$scope.lon) return;
          $scope.loading=true;
          console.log('fetchWeather 2');
          $http({
            url:'http://api.openweathermap.org/data/2.5/forecast',
            params:{
              lat:$scope.lat,
              lon:$scope.lon,
              units:'imperial'
            }
          }).success(function(data){
            $scope.weatherData.push(data)
            $scope.loading=false;
          });
        };
        $scope.$watch('lat',fetchWeather);
        $scope.$watch('lon',fetchWeather);

      }],
      replace: true,
      templateUrl: '/views/forecast/forecast-tpl.html'
  }
});