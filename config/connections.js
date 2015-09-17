module.exports.connections = {
  localDiskDb: {
    adapter: 'sails-disk'
  },
  someMongodbServer: {
    adapter: 'sails-mongo',
    host: 'localhost',
    port: 27017,
    // user: 'username',
    // password: 'password',
    database: 'shred_wa_dev'
  }
};
