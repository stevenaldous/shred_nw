ShredApp.controller('SignUpCtrl',
      ['$scope','UserService',
function($scope, UserService){

  $scope.user={email:'',name:'',password:''};



  $scope.signUp = function(){
    console.log($scope.user);
    UserService.signup($scope.user.email, $scope.user.name, $scope.user.password, function(err,data){
      if(err){
        console.log(err)
        alert('Something terrible happened!')
      }else if(data && data.result){
        alert('signed up!')
      }else{
        console.log(data);
        alert('Unable to signup')
      }
    });
  }

}])