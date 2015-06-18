
Router.route('/', function () {

  this.layout('mainLayout');

  this.render('home', {
    to: 'template',
    data: function () {}
  });
});

Router.route('/room', function () {

  this.layout('mainLayout');

  this.render('room', {
    to: 'template',
    data: function () {}
  });
});