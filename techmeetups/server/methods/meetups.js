// method definitions. methods called in controllers
Meteor.methods({
    'addMeetup': function(params) {
        Meetups.insert(params);
    },
    'updateMeetup': function(id, params) {
        Meetups.update({
            _id: id
        }, {
            $set: params
        });
    },
    'removeMeetup': function(id){
    	Meetups.remove({_id: id});
    }
});
