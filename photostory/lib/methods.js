// accesible from client and server
Meteor.methods({
    addImageInfo: function(imageId, title, story) {
        if (!Meteor.userId()) {
            throw new Meteor.error('Not Authorized');
        };

        ImageInfo.insert({
            title: title,
            story: story,
            imageId: imageId,
            imageUrl: '/cfs/files/Images/' + imageId,
            userId: Meteor.userId(),
            username: Meteor.user().profile.name,
            createdAt: new Date()
        });
    },
    deleteImage: function(imageId) {
        if (!Meteor.userId()) {
            throw new Meteor.Error('Not Authorized');
        };

        Images.remove(imageId);
        // get the id of the correct ImageInfo object to remove
        imageInfoId = ImageInfo.findOne({
            imageId: imageId
        })._id;
        ImageInfo.remove(imageInfoId);
    }
});
