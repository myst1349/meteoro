
Router.route('/', function () {

  this.layout('mainLayout');

  this.render('home', {
    to: 'template',
    data: function () {}
  });

});

Router.route('/room/:id', function () {

  /**
   * TO-DO
   */
  Session.set('room', this.params.id);

  this.layout('mainLayout');

  this.render('room', {
    to: 'template',
    data: function () {}
  });

});