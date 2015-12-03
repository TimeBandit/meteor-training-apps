Template.login.helpers({
    userEmail: function() {
        return Meteor.user().emails[0].address;
    }
});

// Controls one panel which contains both panels
// Jquery used to die and show one panel or other
Template.login.events({
    'click .register-link': function(event) {
        $('.panel-register').fadeIn();
        $('.panel-login').hide();
    },
    'click .login-link': function(event) {
        $('.panel-register').hide();
        $('.panel-login').fadeIn();
    },
    'submit .register-form': function(event) {
        var email = trimInput(event.target.email.value);
        var password = trimInput(event.target.password.value);
        var password2 = trimInput(event.target.password2.value);

        if (isNotEmpty(email) &&
            isNotEmpty(password) &&
            isEmail(email) &&
            areValidPasswords(password, password2)) {
            // Create New user
            Accounts.createUser({
                password: password,
                email: email,
                profile: {
                    usertype: 'staff'
                }
            }, function(err) {
                if (err) {
                    FlashMessages.sendError(err.reason)
                } else {
                    FlashMessages.sendSuccess('Account Created! You are now logged in');
                    Router.go('/');
                };
            });
        }
        return false;

    },
    'submit .login-form': function(event) {
        var email = trimInput(event.target.email.value);
        var password = trimInput(event.target.password.value);

        if (isNotEmpty(email) &&
            isNotEmpty(password)) {

            Meteor.loginWithPassword({
                email: email
            }, password, function(err) {
                if (err) {
                    FlashMessages.sendError(err.reason);
                } else {
                    FlashMessages.sendSuccess('You are now logged in :)');
                };
            })

            // clear form
            event.target.email.value = "";
            event.target.password.value = "";
            
            Router.go('/');
        };
        return false;
    },
    'submit .logout-form': function(event) {
        Meteor.logout(function(err) {
            if (err) {
                FlashMessages.sendError('There was an error logging out, try again please');
            } else {
                FlashMessages.sendSuccess('You are now logged out');
                Router.go('/');
            };

        });
        return false;
    }
});

// Custom Validation Rules

// Trim Helper
var trimInput = function(val) {
    return val.replace(/^\s*|\s*s/g, '')
}

// Check For Empty Fields
isNotEmpty = function(value) {
    if (value && value !== '') {
        return true
    };
    FlashMessages.sendError('Please fill in all the fields');
    return false;
}

// validate email
isEmail = function(value) {
    var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    if (filter.test(value)) {
        return true
    };
    FlashMessages.sendError("Please use a valid email address");
    return false;
};

// check password field
isValidPassword = function(password) {
    if (password.length < 6) {
        FlashMessages.sendError("Password must be at least 6 charachters");
        return false;
    };
    return true;
};

// Match Passwords
areValidPasswords = function(password, confirm) {
    if (!isValidPassword(password)) {
        return false;
    };

    if (password !== confirm) {
        FlashMessages.sendError("Passwords Do Not Match");
        return false;
    };
    return true;
};
