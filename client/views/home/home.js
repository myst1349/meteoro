
// counter starts at 0
Session.setDefault('counter', 0);

Template.home.helpers({

  urlId: function () {
    return Math.random().toString(36).substr(2, 9);
  },

  rooms: function () {
    return Room.find({});
  },

  counter: function () {
    return Session.get('counter');
  }

});

Template.home.events({
  'click button': function () {
    // increment the counter when button is clicked
    Session.set('counter', Session.get('counter') + 1);
  }
});