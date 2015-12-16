// On server startup, if the database is empty, create some initial data.

Meteor.startup(function() {
    // initialize scalactite library
    stalactite($);
});
