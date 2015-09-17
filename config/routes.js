module.exports.routes = {

  '/': 'PagesController.index',

  //   //Auth routes
  // 'get /api/auth':'AuthController.check',
  // 'post /api/signup' : 'AuthController.signup',
  // 'post /api/auth':'AuthController.login',
  // 'delete /api/auth':'AuthController.logout',

  'get *':{
  controller:"PagesController",
  action:"index",
  skipAssets: true,
  skipRegex: /^\/api\/.*$/
  }

};
