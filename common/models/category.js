module.exports = function(Category) {

  // model logic
  // -----------

  Category.beforeSave = function(next, model) {
    // require slugify helper
    var _slugify = require('../slugify'),
        uuid = require('node-uuid');

    // before save create the slug
    model.slug = _slugify(model.name);

    // timestamp of creation
    model.createdAt = Date.now();

    // log output for testing    
    console.log('Category.BeforeSave Triggered. Model id=%s', model.id);
    
    // generate unique identifier for metadata purposes later
    model.uid = uuid.v4();

    // continue 
    next();
  };
};
