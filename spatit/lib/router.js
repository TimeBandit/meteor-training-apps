Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', function() {
    this.render('home');
}, {
    name: 'home'
});

// data: must return a function or an object
Router.route('/products', function() {
    this.render('products', {
        data: {
            products: Products.find()
        }
    });
});

// function () {
// 			templateData = {
// 				products: Products.find()
// 			};
// 			return templateData;
// 		}