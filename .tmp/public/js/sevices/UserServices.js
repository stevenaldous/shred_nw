ShredApp.factory('UserService',['$http', function($http){
  return {
    //log user IN via http
    //trugger callback function when finished
    signup: function(name,email,password,callback){
      var self = this;
      $http.post('/api/signup',{
        name:name,
        email:email,
        password:password
      }).success(function(data){
        if(data && data.result && data.user){
          self.currentUser = data.user
        }else{
          self.currentUser = false
        }
        callback(null,data)
      }).error(callback);
    },
    //log user IN via http
    //trugger callback function when finished
    login: function(email,password,callback){
      var self = this;
      $http.post('/api/auth',{
        email:email,
        password:password
      }).success(function(data){
        if(data && data.result && data.user){
          self.currentUser = data.user
        }else{
          self.currentUser = false
        }
        callback(null,data)
      }).error(callback);
    },
    //check user login status via http
    //trugger callback function when finished
    check: function(callback){
      var self = this;
      $http.get('/api/auth').success(function(data){
        if(data && data.user){
          self.currentUser = data.user
        }else{
          self.currentUser = false
        }
        callback(null,data)
      }).error(callback);
    },
    //log user OUT via http
    //trugger callback function when finished
    logout: function(callback){
      this.currentUser = false;

      $http.delete('/api/auth')
      .success(function(data){
        callback(null,data);
      }).error(callback)
    }
  }



}])