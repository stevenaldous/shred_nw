App.directive('alerts', function(){
  return {
    scope: {},
    controller: ['$scope','AlertService', function($scope, AlertService){

      $scope.getAlerts = function(){
        return AlertService.get();
      }

      $scope.closeAlert = function(idx){
        AlertService.remove(idx);
      }

    }],

    restrict: 'E',
    template: '<alert ng-repeat="alert in getAlerts()" type="{{alert.type}}" close="$parent.closeAlert($index)">{{alert.text}}</alert>',
    replace: true,
  };
});