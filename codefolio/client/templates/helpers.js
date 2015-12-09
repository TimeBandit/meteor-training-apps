Template.login.events({
	'submit .login-user': function (event) {
		var email = event.target.email.value;
		var password = event.target.password.value;

		Meteor.loginWithPassword(email, password, function(err){
			if (err) {
				event.target.email.value = email;
				event.target.password.value = password;

				FlashMessage.sendError(err.reason);
			} else{
				FlashMessages.sendSuccess('You are now logged in');
			};
		});
	}
});