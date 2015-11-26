// Events
Template.NewReview.events({
    'submit .new-review': function(event) {
        var rating = event.target.rating.value;
        var body = event.target.body.value;

        // call used in conjuntion with 
        Meteor.call('addReview', this._id, rating, body);

        FlashMessages.sendSuccess('Review Added');
        Router.go('/');

        // prevent submission
        return false;
    }
});