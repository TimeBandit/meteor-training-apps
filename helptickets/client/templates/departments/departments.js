Template.add_departments.events({
    'submit .add-department-form': function(event) {
        var name = event.target.name.value;
        var head = event.target.head.value;

        console.log(name, head);

        // insert dept
        Departments.insert({
            name: name,
            head: head,
            createdAt: new Date()
        }, function(err) {

            if (err) {
                FlashMessages.sendError(err.reason);
            } else {
                FlashMessages.sendSuccess('Department Added');
                // clear form
                event.target.name.value = "";
                event.target.head.value = ""

                Router.go('/staff/departments')
            };
        });

        // Prevent Submit
        return false;
    }
});

Template.departments.events({
	'click .delete-department': function (event) {
		if (confirm('Are you sure')) {
			Departments.remove({_id: this._id});

			FlashMessages.sendSuccess('Department Deleted');
			// prevent submit
			return false;
		};
	}
});
