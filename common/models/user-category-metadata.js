module.exports = function(UserCategoryMetadata) {

  UserCategoryMetadata.beforeSave = function(next, model) {
    // timestamp of creation
    model.createdAt = Date.now();

    // enabled by default for now
    model.enabled = true; 

    // continue 
    next();
  };

};
