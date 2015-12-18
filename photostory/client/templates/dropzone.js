Template.dropzone.events({
    // Catch the dropped event
    'dropped #dropzone': function(event, temp) {
        
        // using the cfs api
        FS.Utility.eachFile(event, function(file) {
            var newFile = new FS.File(file);
            Images.insert(newFile, function(error, result){
              if (error) {
                FlashMessages.sendError(error.reason);
              } else {
                // store the photo id globally
                Session.set('imageId', result._id)
                
                FlashMessages.sendSuccess('Image Uploaded');
                // get the iamge info
                Modal.show('addInfo');
              };
            })
        });
    }
});
