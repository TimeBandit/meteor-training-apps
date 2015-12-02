Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', {
	template: "mytickets",
	data: function(){
		templateData = {
			tickets: Tickets.find({customer: Meteor.userId()}, {
				/*
				sort: Sort specifier,
				skip: Number,
				limit: Number,
				fields: Field specifier,
				reactive: Boolean,
				transform: Function
				*/
			})
		}

		return templateData;
	}
});

Router.route('/ticket/:_id', {
	template: 'ticket',
	data: function(){
		var currentTicket = this.params._id;
		return Tickets.findOne({_id: currentTicket});
	}
})