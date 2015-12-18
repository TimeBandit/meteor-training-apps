// store info relating to the image
Template.addInfo.events({
    'submit .add-image-info': function(event) {
        // get the imageId session variable
        var imageId = Session.get('imageId');
        var title = event.target.title.value;
        var story = event.target.story.value;

        console.log(imageId, title, story);
        ImageInfo.insert({
            title: title,
            story: story,
            imageId: imageId,
            imageUrl: '/cfs/files/Images/' + imageId,
            userId: Meteor.userId(),
            username: Meteor.user().profile.name,
            createdAt: new Date()
        });

        Modal.hide('addInfo');
        FlashMessages.sendSuccess('Image Info Added');
        return false;
    }
});

