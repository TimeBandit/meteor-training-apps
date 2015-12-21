Template.image.helpers({
	isOwn: function (imageId) {
		var owner = ImageInfo.findOne({imageId:imageId}).userId;
		// is the logged in user the owner of the image
		if (owner === Meteor.userId()) {
			console.log('owner is true');
			return true;
		} else{
			console.log('owner is false');
			return false;
		};
	}
});


Template.image.events({
	'click .remove-image': function (event) {
		// call a method to delete a method
		Meteor.call('deleteImage', this._id);
		FlashMessages.sendSuccess('Image Removed');
		return false;
	}
});