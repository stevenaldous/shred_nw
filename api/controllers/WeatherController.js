// WeatherController

var request = require('request')

module.exports = {

current: function(req,res){
  request({
          url:'http://api.openweathermap.org/data/2.5/weather',
          qs:req.query
      },
      function(err,response,body){
        res.send(body)
      })
},
forecast: function(req,res){
  request({
          url:'http://api.openweathermap.org/data/2.5/forecast',
          qs:req.query
      },
      function(err,response,body){
        res.send(body)
      })
},


};//end of module
