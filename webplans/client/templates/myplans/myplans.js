Template.myplans.helpers({
    userplans: function() {
        return Subscribers.find({
            user_id: Meteor.userId()
        })
    }
});

Template.myplans.events({
    'click .cancel-plan': function() {
        Subscribers.remove(this._id);
        toastr.success('Subscription Cancelled');
        return false;
    }


});
