// routes loaded at boot
module.exports = function(app) {
  var router = app.loopback.Router();
    router.get('/ping', function(req, res) {
      var User = app.models.AstroUser;

      User.findById(1, function(err, user) {
        if (err) throw err;

        res.send("Welcome %s", user.username);
      });
    });

    router.get('/com1plex', function(req, res){
      var data = {
        name: 'Gorilla',
        address: {
          streetName: 'Broadway',
          streetNumber: '721',
          floor: 4,
          addressType: {
            typeName: 'residential'
          }
        }
      };
      res.render('complex', data);
    });

    router.get('/loop', function(req, res){
      var basketballPlayers = [
        {name: 'Lebron James', team: 'the Heat'},
        {name: 'Kevin Durant', team: 'the Thunder'},
        {name: 'Kobe Jordan',  team: 'the Lakers'}
      ];
      
      var days = [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
      ];
      
      var data = {
        basketballPlayers: basketballPlayers,
        days: days
      };
      
      res.render('loop', data);
    });

    app.get('/logic', function(req, res){
      var data = {
        upIsUp: true,
        downIsUp: false,
        skyIsBlue: "yes"
      };
      
      res.render('logic', data);
    });

    app.get('/followers', function(req, res) {
      // get our admin user and interpolate data into template
      app.models.AstroUser.find({ include: 'channel', where: {username: 'admin'}}, function(err, data) {
        if (err) throw err;

        console.log('Logging /followers data[0]');
        console.log(data[0]);
        console.log('-------------------- \r\n');
        console.log("\r\n");

        var user = data[0];

        console.log('\r\n ------------ \r\n');
        console.log(user);

        app.models.Followers.findOne({ include: ['fromUser', 'toUser'] }, function(err, data) {
          console.log("output from followers query");
          console.log(data);
          
          var followers = data,
              fromUser = data.fromUser(),
              toUser = data.toUser();

          console.log('To User: %s', toUser.username);
          console.log('From User: %s', fromUser.username);

          res.render('followers', {user: user, followers: followers, fromUser: fromUser, toUser: toUser});
        });

      });
    });

    app.get('/users', function(req, res) {
      // get our admin user and interpolate data into template
      app.models.AstroUser.find({ include: 'channel'}, function(err, data) {
        if (err) throw err;

        console.log('Logging /users data0 data1');
        console.log(data[0]);
        console.log('-------------------- \r\n');
        console.log(data[1]);
        console.log("\r\n");

        var users = data;

        console.log('\r\n ------------ \r\n');
        console.log(users);
        // console.log(channel1);
        // console.log(channel2);

        res.render('user', {users: users});
      });
    });

    app.get('/user', function(req, res) {
      // get our admin user and interpolate data into template
      app.models.AstroUser.find({ include: 'channel', where: {username: 'admin'}}, function(err, data) {
        if (err) throw err;

        console.log(data);
        var user = data[0];
            channel = user.channel();

        console.log('\r\n ------------ \r\n');
        console.log(user);
        console.log(channel);

        res.render('user', {user: user, channel: channel});
      });
    });

    app.get('/user/:id', function(req, res) {
      var userId = req.params.id;  // simple err catching for now. 
      console.log(req.params.id);

      // get our admin user and interpolate data into template
      app.models.AstroUser.find({ include: 'channel', where: {id: userId}}, function(err, data) {
        if (err) throw err;

        console.log(data);
        var user = data[0];
            channel = user.channel();

        console.log('\r\n ------------ \r\n');
        console.log(user);
        console.log(channel);

        res.render('user', {user: user, channel: channel});
      });
    });

    app.get('/channel', function(req, res) {

      app.models.Channel.find({include: 'astroUser', where: {slug: 'core-channel'}}, function(err, data) {
        if (err) throw err;

        console.log(data);
        var data = data[0],
            channel = data,
            user = channel.astroUser();

        res.render('channel', {user: user, channel: channel});
      });
    });
    
    // attach the routes to app
    app.use(router);
};
