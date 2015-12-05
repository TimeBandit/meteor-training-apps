// add a reply to the current ticket object
Template.ticket.events({
    'submit .add-reply': function(event) {
        var reply = event.target.reply.value;
        var usertype;

        if (Meteor.user().profile.usertype === 'staff') {
            usertype = 'staff';
        } else {
            usertype = 'customer';
        };

        Tickets.update({
                _id: this._id
            }, {
                $push: {
                    replies: {
                        reply: reply,
                        usertype: usertype,
                        user: Meteor.userId(),
                        replyDate: new Date()
                    }
                }
            },
            function(err) {
                if (err) {
                    FlashMessages.sendError(err.reason);
                } else {
                    event.target.reply.value = '';
                    FlashMessages.sendSuccess('Reply Added');
                };
            });

        return false;
    }
});
