// Custom validation
Template.register.events({
    'submit .form-signup': function(event) {
        var email = trimInput(event.target.email.value);
        var password = trimInput(event.target.password.value);
        var password2 = trimInput(event.target.password2.value);
        var first_name = trimInput(event.target.first_name.value);
        var last_name = trimInput(event.target.last_name.value);

        if (isNotEmpty(email) &&
            isNotEmpty(password) &&
            isNotEmpty(first_name) &&
            isNotEmpty(last_name) && isEmail(email) &&
            areValidPasswords(password, password2)) {

            // Create a new User if the above validations PASS
            Accounts.createUser({
                password: password,
                email: email,
                profile: {
                    first_name: first_name,
                    last_name: last_name
                }
            }, function(err) {
                if (err) {
                    FlashMessages.sendError('There was an error with registration');
                } else {
                    FlashMessages.sendSuccess('Account Created, You are now logged in');
                    Router.go('/dashboard');
                };
            });
        }

        return false;
    }
});

// Validation Rules

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
