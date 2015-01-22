module.exports = function(Channel) {

  Channel.beforeSave = function(next, model) {
    // require slugify helper
    var _slugify = require('../slugify');

    // before save create the slug
    model.slug = _slugify(model.name);

    // timestamp of creation
    model.createdAt = Date.now();

    // log output for testing    
    console.log('Channel.BeforeSave Triggered. Model id=%s', model.id);

    // continue 
    next();
  };

};