Meteor.subscribe('posts');
Meteor.subscribe('UserImages');

accountsUIBootstrap3.logoutCallback = function(error) {
    if (error) console.log("Error:" + error);
    Router.go('posts');
}

Accounts.ui.config({
    requestPermissions: {},
    passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});

Template.registerHelper('getProfileImg', function(userId) {
    var imgUrl = UserImages.findOne({
        userId: userId
    }).image;
    
    return imgUrl;
})
