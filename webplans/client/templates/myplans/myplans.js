// fetch the subscriptions for a given id
Template.myplans.helpers({
    userplans: function() {
        return Subscribers.find({
            user_id: Meteor.userId()
        })
    }
});

// user can remove a plan from his subscriptions
Template.myplans.events({
    'click .cancel-plan': function() {
        // access to the current data context is with 'this'
        Subscribers.remove(this._id);
        toastr.success('Subscription Cancelled');
        return false;
    }


});
