// accesible from client and server
Meteor.methods({
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
