

Template.room.helpers({
  status: function() {
    var role = Session.get('player');

    function status(role) {
      switch (role) {
        case undefined:
          return 'Guest';
          break;
        case '0':
          return 'Spectator';
          break;
        case '1':
        case '2':
        case '3':
          return 'Player ' + role;
          break;
      }
    }

    return status(role);
  }

});

Template.room.events({
  'click .roles__btn': function (event) {

    /**
     * Set session player role from data-player
     * TO-DO: persistent session storage
     */
    if (Session.get('player') === undefined) {
      Session.set('player', event.target.dataset.player);
      $(event.currentTarget).addClass('roles__btn--active');
    }

  }
});