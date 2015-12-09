// modifies a select field in the tempalte
Template.editplan.helpers({
    checkValue: function(val1, val2) {
        if (val1 == val2) {
            return 'selected';
        };
    }
});

// adds a plan to into the Plans collection
Template.addplan.events({
    'submit .add-plan-form': function(event) {
        var plan_name = event.target.plan_name.value;
        var plan_label = event.target.plan_label.value;
        var days = event.target.days.value;
        var description = event.target.description.value;
        var is_default = event.target.is_default.value;
        var price = event.target.price.value;

        Plans.insert({
            plan_name: plan_name,
            plan_label: plan_label,
            days: days,
            price,
            price,
            description: description,
            is_default: is_default
        }, function(err) {
            if (err) {
                toastr.error(err.reason, 'Oops!');
            } else {
                toastr.success('Plan Added', ':-D');
                Router.go('/admin/plans');
            };
        });

        // toastr.success('Plan Added', ':-D');
        return false;

    }
});

// Takes the submitted fields in the edit form and updates the collection
Template.editplan.events({
    'submit .edit-plan-form': function(event) {
        var plan_name = event.target.plan_name.value;
        var plan_label = event.target.plan_label.value;
        var days = event.target.days.value;
        var description = event.target.description.value;
        var is_default = event.target.is_default.value;
        var price = event.target.price.value;

        Plans.update({
            _id: this._id
        }, {
            $set: {
                plan_name: plan_name,
                plan_label: plan_label,
                days: days,
                price,
                price,
                description: description,
                is_default: is_default
            }
        }, function(err) {
            if (err) {
                toastr.error(err.reason, 'Oops!');
            } else {
                toastr.success('Plan Updated', ':-D');
                Router.go('/admin/plans');
            };
        });        

        // toastr.success('Plan Added', ':-D');
        return false;

    }
});

// remove a plan from the list
Template.listplans.events({
	'click .delete-plan': function () {
		Plans.remove({_id: this._id}, function(err) {
            if (err) {
                toastr.error(err.reason, 'Oops!');
            } else {
                toastr.success('Plan Deleted', ':-D');
                Router.go('/admin/plans');
            };
        });
	}
});
