Template.addplan.events({
	'submit .add-plan-form': function (event) {
		var plan_name = event.target.plan_name.value;
		var plan_label = event.target.plan_label.value;
		var days = event.target.days.value;
		var description = event.target.description.value;
		var is_default = event.target.is_default.value;
		var price = event.target.price.value;

		console.log(plan_name,plan_label,days,description,is_default,price);
	}
});