Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', {
	template: 'plans',
	name: 'plans'
});

Router.route('/admin/plans', {
	template: 'listplans',
	name: 'listplans',
	data: function(){
		templateData = {
			plans: Plans.find()
		};

		return templateData;
	}
});

Router.route('/admin/plans/add', {
	template: 'addplan',
	name: 'addplan'
});

Router.route('/admin/plans/edit/:_id', {
	template: 'editplan',
	name: 'editplan'
});

Router.route('/admin/subscribers', {
	template: 'listsubscribers',
	name: 'listsubscribers'
});