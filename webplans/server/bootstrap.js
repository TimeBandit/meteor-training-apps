// initialization stuff

Meteor.startup(function() {
    if (Meteor.users.find().count() < 1) {
        var users = [{
            name: 'Superuser',
            email: 'admin@example.com',
            roles: ['admin']
        }]

        _.each(users, function(user, key, list) {
        	var id;

        	// create a user
        	id = Accounts.createUser({
        		password: 'password',
        		email: user.email,
        		profile: {
        			name: user.name
        		}
        	});

        	if (user.roles.length > 0) {
        		Roles.addUsersToRoles(id, user.roles);
        	};

        });
    };
});
