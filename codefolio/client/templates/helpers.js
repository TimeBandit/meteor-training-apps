Template.login.events({
    'submit .login-user': function(event) {
        var username = event.target.username.value;
        var password = event.target.password.value;
        

        Meteor.loginWithPassword(username, password, function(err) {
            if (err) {
                event.target.username.value = username;
                event.target.password.value = password;
                
                // if this is missspelt you get erroneous errors
                FlashMessages.sendError(err.reason);
            } else {
                FlashMessages.sendSuccess('You are now logged in');
                Router.go('/admin/projects');
            };
        });

        // clear form
        event.target.username.value = "";
        event.target.password.value = "";
        // prevent form submission
        return false;
    }
});

// reference the container template instead of 'login'
Template.layout.events({
	'click .logout-user': function () {
		Meteor.logout(function(err){
			if (err) {} else{
				FlashMessages.sendSuccess('You are now logged out');
				Router.go('/admin');
			};
		});
	}
});

// available through the whole application
Template.registerHelper('formatDate', function(date){
    return moment(date).format('MMMM Do YYYY, h:mm:ss a')
});

Template.registerHelper('getSiteTitle', function(date){
    return 'TimeBandit'
});

Template.registerHelper('getAdminName', function(date){
    return 'Mo Ali';
});

Template.registerHelper('getAdminImage', function(date){
    return '/assets/img/user.png';
});