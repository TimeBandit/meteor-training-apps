Template.mytickets.events({
    'submit .open-ticket-form': function(event) {
        var name = event.target.name.value;
        var email = event.target.email.value;
        var subject = event.target.subject.value;
        var department = event.target.department.value;
        var priority = event.target.priority.value;
        var message = event.target.message.value;
        var status = 'new';

        console.log(name, email, subject);

        Tickets.insert({
            name: name,
            email: email,
            subject: subject,
            department: department,
            priority: priority,
            status: status,
            message: message,
            customer: Meteor.userId(),
            createdAt: new Date() // current time
        }, function(err) {

            if (err) {

                FlashMessages.sendError(err.reason);
                console.log('didnt work');
            } else {

                FlashMessages.sendSuccess('Ticket Added');

                // close the modal using jQuery
                $('#openTicketModal').modal('hide');

                // clear the form
                event.target.name.value = "";
                event.target.email.value = "";
                event.target.subject.value = "";
                event.target.priority.value = "Medium";
                event.target.message.value = "";


            };
        });
        return false;
    },
    'click .close-ticket': function (event) {
    	Tickets.remove({_id: this._id}, function(err){
    		if (err) {
    			console.log(err.reason);
    		} else{
    			FlashMessages.sendSuccess('Ticket Closed')
    		};
    	});
    }
});