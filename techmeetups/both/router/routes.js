Router.route('/', {
  name: 'home'
});

Router.route('/meetups', {
	name: 'meetups',
	controller: 'MeetupsController'
});

Router.route('/meetups/add', {
	name: 'addMeetup',
	controller: 'MeetupsController'
});

Router.route('/dashboard', {
  name: 'dashboard',
  controller: 'DashboardController'
});

// pages that user needs to be signed in to view
Router.plugin('ensureSignedIn', {
  only: ['dashboard', 'addMeetup']
});
