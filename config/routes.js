module.exports.routes = {

  '/': 'PagesController.index',

  '/api/weather/current' : 'WeaterController.current',
  '/api/weather/forecast' : 'WeaterController.forecast',


  'get *':{
  controller:"PagesController",
  action:"index",
  skipAssets: true,
  skipRegex: /^\/api\/.*$/
  }

};
