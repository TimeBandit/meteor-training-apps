Template.imageInfo.helpers({
    test: function(_id){
        console.log(_id);
        return _id
    },
    getTitle: function(imageId) {
        var res = ImageInfo.findOne({
            imageId: imageId
        });        
        return res.title;
    },
    getStory: function(imageId) {
        return ImageInfo.findOne({
            imageId: imageId
        }).story;
    },
    getUsername: function(imageId) {
        return ImageInfo.findOne({
            imageId: imageId
        }).username;
    }
});