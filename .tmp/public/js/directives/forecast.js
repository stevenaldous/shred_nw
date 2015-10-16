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
          if($scope.loading || !$scope.lat || !$scope.lon) return;
          $scope.loading=true;
          $http({
            url:'/api/weather/forecast',
            params:{
              lat:$scope.lat,
              lon:$scope.lon,
              units:'imperial',
              APPID:'74771337abc01c5e97450c4e12e4f97f'
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