/**
* Dirt.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name:{
      type:'string'
    },
    city:{
      type:'string'
    },
    url:{
      type:'string'
    },
    lat:{
      type:'float'
    },
    lon:{
      type:'float'
    },
    rating:{
      type:'integer'
    },
    description:{
      type:'text'
    },
    image:{
      type:'string'
    }
  }
};

