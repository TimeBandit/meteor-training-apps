accountsUIBootstrap3.logoutCallback = function(error) {
    if (error) console.log("Error:" + error);
    Router.go('posts');
}

Accounts.ui.config({
    requestPermissions: {},
    passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});