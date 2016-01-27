Meteor.startup(function () {
	console.log('starting up, yay!')
	if (Meteor.users.find().count() === 0) {
		Accounts.createUser({
			username: 'joeschmoe',
			password: 'password',
			email: 'joe@schmoe.com',
			profile: {
				name: 'Joe Schmoe'
			}
		});
	};
});