// helper delivers with account-ui-bootstrap-3
Template._loginButtonsLoggedInDropdown.events({
    'click #login-buttons-edit-profile': function(event) {
        Router.go('profile');
    }
});

// template events handler, stores images to FSCollection
Template.profile.events({
    'submit .edit-profile': function(event) {
        // store the file in a var
        var file = $('#profileImage').get(0).files[0];
        console.log(file);

        if (file) {
            fsFile = new FS.File(file);
            
            ProfileImages.insert(fsFile, function(err, result) {
                if (err) {
                    throw new Meteor.Error(err)
                } else {

                    var imageLoc = '/cfs/files/ProfileImages/' + result._id;

                    UserImages.insert({
                        userId: Meteor.userId(),
                        username: Meteor.user().username,
                        image: imageLoc
                    });

                    Router.go('/');
                };
            })
        };
        return false;
    }
});
