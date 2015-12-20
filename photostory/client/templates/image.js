Template.image.helpers({
	isOwn: function (imageId) {
		var owner = ImageInfo.findOne({imageId:imageId}).userId;
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
		Meteor.call('deleteImage', this._id);
		FlashMessages.sendSuccess('Image Removed');
		return false;
	}
});