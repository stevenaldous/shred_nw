////////////////////////////////////////////////////
////////////////////////////////////////////////////
//         DO NOT REMOVE, KEEP FOR DB UPDATES     //
////////////////////////////////////////////////////
////////////////////////////////////////////////////

// var request = require('request');
// var Sails = require('sails');

// // complete function to pull MTB trails TrailAPI and store in mongoDB
// Sails.load(function(err,sails) {
//   var Dirt = sails.models.dirt;
//   request({
//       url:"https://outdoor-data-api.herokuapp.com/api.json",
//     qs:{
//       'api_key': '6aa766282b6b6986e9a201a0ad0c0ea7',
//       'limit':500,
//       'q[activities_activity_type_name_cont]':'mountain biking',
//       'q[state_eq]':"Washington"
//       }
//     },function(error,response, body){
//       if(!error && response.statusCode === 200){
//         var trails = JSON.parse(body)
//         trails.places.forEach(function(place){
//           place.activities.forEach(function(activity){
//             Dirt.create({
//               name:activity.name,
//               city:place.city,
//               state:'WA',
//               url:activity.url,
//               lat:place.lat,
//               lon:place.lon,
//               rating:activity.rating,
//               description:activity.description,
//               image:activity.thumbnail
//             }).then(function(data){

//             })
//           })
//         })
//       }else{
//         console.log({
//           error:error,
//           code:response.statusCode
//         });
//       }
//     });
// });



// complete function to pull snow sports from TrailAPI and store in mongoDB
// Sails.load(function(err,sails) {
//   var Snow = sails.models.snow;
//   request({
//       url:"https://outdoor-data-api.herokuapp.com/api.json",
//     qs:{
//       'api_key': '6aa766282b6b6986e9a201a0ad0c0ea7',
//       'limit':20,
//       'q[activities_activity_type_name_cont]':'snow sports',
//       'q[state_eq]':"Washington"
//       }
//     },function(error,response, body){
//       if(!error && response.statusCode === 200){
//         var trails = JSON.parse(body)
//         trails.places.forEach(function(place){
//           place.activities.forEach(function(activity){
//             Snow.create({
//               name:activity.name,
//               city:place.city,
//               state:'WA',
//               url:activity.url,
//               lat:place.lat,
//               lon:place.lon,
//               rating:activity.rating,
//               description:activity.description,
//               image:activity.thumbnail
//             }).then(function(data){

//             })
//           })
//         })
//       }else{
//         console.log({
//           error:error,
//           code:response.statusCode
//         });
//       }
//     });
// });








