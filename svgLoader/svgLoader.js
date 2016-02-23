// create a new Mongo db collection
People = new Mongo.Collection('people');

if (Meteor.isClient) {
    Meteor.startup(function() {
        Meteor.subscribe('people', function() {
            $(".spinner").fadeOut(1000, function() {
                console.log('im in');
                $(this).remove();
            });
        });
    });

    console.log('Go Meteor');
}

if (Meteor.isServer) {
    // Inject the spinner HTML into the head
    Inject.rawBody("loader", Assets.getText('spinner.html'));

    Meteor.publish('people', function() {
        Meteor._sleepForMs(2000);
        return People.find();
    });
}
