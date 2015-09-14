ShredApp.controller('NavCtrl',
  ['$scope', '$timeout', '$mdSidenav', '$mdUtil', '$log', '$timeout',
  function($scope, $timeout, $mdSidenav, $mdUtil, $log, $timeout){
    console.log('in nav!')
    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');
    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildToggler(navID) {
      var debounceFn =  $mdUtil.debounce(function(){
            $mdSidenav(navID)
              .toggle()
              .then(function () {
                $log.debug("toggle " + navID + " is done");
              });
          },200);
      return debounceFn;
    }
  }])
ShredApp.controller('LeftCtrl',
[ '$scope', '$timeout', '$mdSidenav', '$log',
 function ($scope, $timeout, $mdSidenav, $log) {
  console.log('in LeftCtrl!')
    $scope.close = function () {
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });
    };
  }])
ShredApp .controller('RightCtrl',
  [ '$scope', '$timeout', '$mdSidenav', '$log',
 function ($scope, $timeout, $mdSidenav, $log) {
  console.log('in RightCtrl!')
    $scope.close = function () {
      $mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
    };
  }]);