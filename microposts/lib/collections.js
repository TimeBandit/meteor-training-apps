// Profile Images Collection
ProfileImages = new FS.Collection('ProfileImages', {
    stores: [new FS.Store.GridFS('ProfileImages')]
});

// read/write permissions for ProfileImages collection
ProfileImages.allow({
	insert: function (userId, doc) {
		return true;
	},
	update: function (userId, doc, fields, modifier) {
		return true;
	},
	download: function () {
		return true;
	}
});

// Collection that connects the users to the images
UserImages = new Mongo.Collection('UserImages');

Posts = new Mongo.Collection('posts');

Posts.allow({
	insert: function (userId, doc) {
		return true;
	},
	fetch: ['owner']
});

// setting up a schema with collections2 package
Posts.attachSchema(new SimpleSchema({
    body: {
        type: String,
        max: 500
    },
    userId: {
        type: String,
        autoValue: function() {return Meteor.userId()}
    },
    username: {
        type: String,
        autoValue: function() {
            return Meteor.users.findOne({_id: this.userId}).username}
    },
    createdAt: {
        type: Date,
        autoValue: function() {return new Date()}
    }
}));
