module.exports.routes = {

  '/': 'PagesController.index',

  'get *':{
  controller:"PagesController",
  action:"index",
  skipAssets: true,
  skipRegex: /^\/api\/.*$/
  }

};
