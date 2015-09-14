/**
 * DirtController
 *
 * @description :: Server-side logic for managing dirts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var request = require('request');

module.exports = {
  index: function(req,res) {
    request({
      url:"https://outdoor-data-api.herokuapp.com/api.json",
    qs:{
      'api_key':process.env.TRAILS_API,
      'q[activities_activity_type_name_cont]':'mountain biking',
      'q[city_cont]':"seattle"
      }
    },function(error,response, body){
      if(!error && response.statusCode === 200){
        //optionally do some pre-proccessing here
        res.send(body);
      }else{
        res.send({
          error:error,
          code:response.statusCode
        });
      }
    });
  }//end of index
};//end of module
