Template.image.helpers({
	isOwn: function (imageId) {
		var owner = ImageInfo.findOne({imageId:imageId}).userId;
		if (owner === Meteor.userId()) {
			return true;
		} else{
			return false;
		};
	}
});

Template.image.events({
	'click .remove-image': function (event) {
		Images.remove(this._id);
		
		// get the id of the correct ImageInfo object to remove
		ImageInfoId = ImageInfo.findOne({imageId:this._id});
		ImageInfo.remove(ImageIndoId.imageId);
	}
});