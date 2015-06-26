
/**
 * Helpers
 */
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


/**
 * Events
 */
Template.room.events({
  'click .roles__btn': function (event) {

    /**
     * Set session player role from data-player attr
     */
    if (Session.get('player') === undefined) {

      var playerId = event.target.dataset.player;
      var roomCollection = Room.findOne({id: Session.get('room')});

      Room.update({_id: roomCollection._id}, {
        $push: {
          players: playerId
        }
      });

      Session.set('player', playerId);
      $(event.currentTarget).addClass('roles__btn--active');

    }

  }
});


/**
 * Execute on template render
 */
Template.room.onRendered(function() {
  var role = Session.get('player');

  $('[data-player="' + role + '"]').addClass('roles__btn--active');

  /**
   * Chart
   */
  Session.set('x', ['x', 30, 50, 75, 100, 120]);
  Session.set('player1', ['player1', 30, 200, 100, 400, 150]);
  Session.set('player2', ['player2', 20, 180, 240, 100, 190]);
  Session.set('player3', ['player3', 40, 130, 200, 150, 290]);

  var chart = c3.generate({
    bindto: this.find('#chart'),
    data: {
      xs: {
        'player1': 'x',
        'player2': 'x',
        'player3': 'x'
      },
      columns: [['x'],['player1'],['player2'],['player3']]
    },
    axis: {
      x: {
        type: 'timeseries',
        tick: {
          format: '%H:%M:%S'
        }
      }
    }
  });

  this.autorun(function (tracker) {
    chart.load({columns: [
      Session.get('x'),
      Session.get('player1'),
      Session.get('player2'),
      Session.get('player3'),
      []
    ]});
  });

});