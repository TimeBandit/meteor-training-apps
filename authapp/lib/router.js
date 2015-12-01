Router.configure({
	layoutTemplate: 'form_layout'
});

Router.route('/', function () {
	this.render('login');
});

Router.route('/register', function () {
	this.render('register');
});

// this router uses a custom layout
// different from the other layouts
// see https://iron-meteor.github.io/iron-router/#hooks
// for different way of calling onBeforeAcrion
Router.route('/dashboard', {
	layoutTemplate: 'dashboard_layout',
	path: '/dashboard',
	tempalte: 'dashboard',
	onBeforeAction: function(){
		if (Meteor.user()== null) {
			FlashMessages.sendError('Please Login :)');
			Router.go('/');
		};
		// continue calling the next function
		this.next();
	}
});