// Categories
Categories = new Mongo.Collection('categories', {});

// Products
Products = new Mongo.Collection('products', {});

// Images

ProductsImages = new FS.Collection('ProductsImages', {
	stores: [new FS.Store.GridFS('ProductsImages')]
});

// Allows insert and downloads of the images
// This permissions acting from the client side
ProductsImages.allow({
	insert: function (fileId, doc) {
		return true;
	},
	download: function (fileId, doc) {
		return true;
	}
});