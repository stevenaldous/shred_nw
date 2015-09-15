var request = require('request');



    request({
      url:"https://outdoor-data-api.herokuapp.com/api.json",
    qs:{
      'api_key':process.env.TRAILS_API,
      'q[activities_activity_type_name_cont]':'mountain biking',
      'q[state_eq]':"Washington"
      }
    }).then(function(data){
      console.log(data.\)
    })


