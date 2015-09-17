// WeatherController

var request = require('request')

module.exports = {

index: function(req,res){
  request({
          url:'http://api.openweathermap.org/data/2.5/weather',
          qs:{
            lat:48.66758,
            lon:-122.82292,
            units:'imperial'
          }
      },
      function(err,response,body){
        res.send(body)
      })
}

};//end of module
