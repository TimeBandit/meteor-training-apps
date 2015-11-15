// Profile Images Collection
ProfileImages = new FS.Collection('ProfileImages', {
	stores: [new FS.Store.GridFS('ProfileImages')]
});

// Collection that connects the users to the images
UserImages = new Mongo.Collection('UserImages');