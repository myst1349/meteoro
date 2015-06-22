
Router.route('/', function () {

  this.layout('mainLayout');

  this.render('home', {
    to: 'template',
    data: function () {}
  });

});

Router.route('/room/:id', function () {

  this.layout('mainLayout');

  this.render('room', {
    to: 'template',
    data: function () {}
  });

  /**
   * TO-DO
   */
  Session.set('room', this.params.id);

  /**
   * Check room for existence. If doesn't exists - add
   */
  if ( !Room.findOne({id: this.params.id}) ) {
    Room.insert({id: this.params.id});
  }

});