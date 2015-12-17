Template.dropzone.events({
    // Catch the dropped event
    'dropped #dropzone': function(event, temp) {
        console.log('files droped');

        // If using the cfs api
        FS.Utility.eachFile(event, function(file) {
            var newFile = new FS.File(file);
            Images.insert(newFile, function(error, result){
              if (error) {
                FlashMessages.sendError(error.reason);
              } else {
                // store the photo id globally
                console.log('image _id is: ', result._id);
                Session.set('imageId', result._id)
                FlashMessages.sendSuccess('Image Uploaded');
                Modal.show('addInfo');
              };
            })
        });
    }
});
