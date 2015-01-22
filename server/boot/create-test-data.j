module.exports = function createData(app) {

  app.models.AstroUser.create({
      username: 'admin', 
      email: 'foo@bar.com', 
      password: 'bar',
      membership: 'superuser',
      channelId: 1 }, function(err, user) {
  
        // log the user creds to shell
        console.log("Created new user with username %s\r\n", user.username);
  });

  app.models.Category.create([
      {name: 'HTML', createdAt: Date.now(), enabled: true},
      {name: 'CSS', createdAt: Date.now(), enabled: true},
      {name: 'Web Development', createdAt: Date.now(), enabled: true},
    ], function(err, categories) {
      if (err) throw err;

      // log created models from successful migration
      console.log('Models created: \n', categories);
  });

  app.models.Channel.create([
      {name: 'Core Channel', createdAt: Date.now(), userId: 1}
    ], function(err, channels) {
      if (err) throw err;

      // log created models from successful migration
      console.log('Models created: \n', channels);
  });

  // invoke a query on boot to test the relationship between channel & user
  
  (function(application) {
    var app = application;

    setTimeout(function() {
      app.models.Channel.find({include: 'astroUser', where: {id: 1}, limit: 1}, function(err, channel) {
        if (err) throw err;

        var channel = channel[0];  // find returns array; findOne would be better here
        var user = channel.astroUser();

        console.log("Does the find() return anything? Next line logs var ch to see");
        console.log(channel);
        console.log("Getting the user for Channel: %s", channel.name);
        console.log("\r\n What user belongs to this channel?");
        console.log("....");
        console.log("user that owns Channel %s is %s", channel.name, user.username || user.email);
        console.log("\r\n**Lets add the channel %s to the user %s model instance", channel.name, user.username);

        // see if this is adds the channel to the actual astrouser model for later use
        channel.astroUser(user);
        console.log(channel);

        console.log(user);

        var props = user.channel() == undefined ? console.log('props is undefined. user.channel() is no good') : console.log(props);

        console.dir(user.channel);
        
        // enumerate over all methods, keys, etc.. 
        //user.channel

        console.log("\r\n");
        console.log("Lets add some categories and metadata to our user!\r\n \r\n");

        app.models.Category.findById(1, function(err, category) {
          if (err) throw err;

          console.log('Got category w/ name %s', category.name);

          user.categories.add(category, function(err, metadata) {
            if (err) throw err;

            console.log(category);
            console.log('Added category %s to user %s\'s subscription \r\n\r\n', category.name, user.username);
          });
        });
        
        // optionally get the user by running another query using the FK from channel
        // app.models.User.findById(data[0].userId, function(err, userData) {
        //   if (err) throw err;

        //   console.log("User %s owns Channel %s", userData.username, data[0].name);
        // });
      });
    }, 1200);
  })(app);
};