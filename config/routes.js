module.exports.routes = {

  '/': 'PagesController.index',

  '/api/weather' : 'WeaterController.index',

  'get *':{
  controller:"PagesController",
  action:"index",
  skipAssets: true,
  skipRegex: /^\/api\/.*$/
  }

};
