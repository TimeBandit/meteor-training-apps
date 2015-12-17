Template.home.helpers({
    images: function() {
        return Images.find({}, {
            sort: [
                ['uploadedAt', 'desc']
            ]
        })
    }
});

Template.home.onRendered(function() {    
    $("#photo-story").stalactite();
});