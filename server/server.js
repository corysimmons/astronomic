var loopback = require('loopback');
var boot = require('loopback-boot');
var expressHbs = require('express-handlebars');
var app = module.exports = loopback();


// setup handlebars w/ express and point to layout template
app.engine('hbs', expressHbs({extname:'hbs', layoutsDir: __dirname+'/views/layouts', defaultLayout: 'base.hbs'}));
app.set('view engine', 'hbs');

// set these views to be used in the server directory only
app.set('views', __dirname+'/views');

// Set up the /favicon.ico
app.use(loopback.favicon());

// request pre-processing middleware
app.use(loopback.compress());

// -- Add your pre-processing middleware here: Must come before boot call or will get overwritten --
var bodyParser = loopback.bodyParser;
app.use(bodyParser.urlencoded({ extended: true }));

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname);

// -- Mount static files here-- 
// All static middleware should be registered at the end, as all requests
// passing the static middleware are hitting the file system
// Example:
var path = require('path');
app.use(loopback.static(path.resolve(__dirname, '../client')));

// Requests that get this far won't be handled
// by any middleware. Convert them into a 404 error
// that will be handled later down the chain.
app.use(loopback.urlNotFound());

// The ultimate error handler.
app.use(loopback.errorHandler());


app.start = function() {
  // start the web server
  return app.listen(process.env.PORT || app.get('port'), function() {
    app.emit('started');
    console.log('Web server listening at: %s', app.get('url'));
  });
};

// start the server if `$ node server.js`
if (require.main === module) {
  app.start();
}
