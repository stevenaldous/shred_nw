// //this directive goes to OpenWeather API and fetches current conditions
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
          url:'/api/weather/current',
          params:{
            lat:$scope.lat,
            lon:$scope.lon,
            units:'imperial',
            APPID:'74771337abc01c5e97450c4e12e4f97f'
          }
        }).success(function(data){
          $scope.weatherData.push(data)
        })
      }],
      transclude: true,
      link: function(scope, element, attrs, ctrl, transclude) {
      transclude(scope, function(clone) {
       element.append(clone);
      });
    }
  }
});
