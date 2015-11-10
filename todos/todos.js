// create a new Mongo db collection
Todos = new Mongo.Collection('todos');

if (Meteor.isClient) {
    // Template Helpers, methods that are available to the templates
    Template.main.helpers({
        todos: function() {
            return Todos.find({}, {

                sort: {
                    createdAt: -1
                },

            });
        }
    });
    // Events attached to the template
    Template.main.events({
        'submit .new-todo': function(event) {
            // 'text' is the 'name' of the form
            var text = event.target.text.value;

            Meteor.call('addTodo', text);

            // clear form
            event.target.text.value = "";

            // prevent submit
            return false;
        },

        'click .toggle-checked': function () {
          Meteor.call('setChecked', this._id, !this.checked);
        },

        'click .delete-todo': function () {
          if (confirm('Are you sure')) {
            Meteor.call('deleteTodo', this._id);
          };
        }
    });

    Accounts.ui.config({
      requestPermissions: {
        // facebook: ['user_likes']
      },
      requestOfflineToken: {
        // google: true
      },
      passwordSignupFields: 'USERNAME_ONLY' //  One of 'USERNAME_AND_EMAIL', 'USERNAME_AND_OPTIONAL_EMAIL', 'USERNAME_ONLY', or 'EMAIL_ONLY' (default).
    });
}

if (Meteor.isServer) {
    Meteor.startup(function() {
        // code to run on server at startup
    });
}

// Meteor.methods needed once insecure package removed
// to perform db writes
Meteor.methods({
  addTodo: function (text) {
    if (!Meteor.userId) {
      throw new Meteor.error('not-authorized');
    };

    Todos.insert({
      text: text,
      createdAt: new Date(),
      UserId: Meteor.userId(),
      username: Meteor.user().username
    });
  },

  deleteTodo: function (todoId) {
    Todos.remove(todoId);
  },

  setChecked: function (todoId, setChecked) {
    Todos.update(todoId, {$set:{checked: setChecked}});
  }
});