module.exports.routes = {

  '/': 'PagesController.index',

  // 'get /api/dirt' : 'DirtController.index',

  'get *':{
  controller:"PagesController",
  action:"index",
  skipAssets: true,
  skipRegex: /^\/api\/.*$/
  }

};
