// data subscriptions
Meteor.subscribe('posts');
Meteor.subscribe('UserImages');

// redirect to posts url when logged out
accountsUIBootstrap3.logoutCallback = function(error) {
    if (error) console.log("Error:" + error);
    Router.go('posts');
}

Accounts.ui.config({
    requestPermissions: {},
    passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});

// global helper registered, returns the url of the image
Template.registerHelper('getProfileImg', function(userId) {
    var imgUrl = UserImages.findOne({
        userId: userId
    }).image;
    
    return imgUrl;
})
