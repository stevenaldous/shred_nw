ShredApp.controller('NavCtrl',
  ['$scope','$modal','UserService',function
  ($scope,$modal,UserService){

  $scope.navCollapsed=true;

  $scope.UserService = UserService;
    $scope.$watchCollection('UserService',function(){
      $scope.currentUser = UserService.currentUser
    })


    // $scope.logout = function(){
    //   UserService.logout(function(err,data){
    //   })
    // }






}])
