Router.configure({
  layoutTemplate: 'header',
  loadingTemplate: 'loading',
  data: function() {
    return {
      templateIsHome: Router.current().route.name == 'home'
    };
  }
});

Router.route('/', function() {
  this.layout('blank');
  this.render('home');
}, { name: 'home' });

Router.route('/stream', {name: 'stream'});

Router.route('/browse', {name: 'browse'});