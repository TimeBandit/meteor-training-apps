// configure the router
Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', function() {
        this.render('home', {
            data: {
                products: Products.find({
                    is_featured: 1
                })
            }
        });
    },

    {
        name: 'home'
    }
);

// data: must return a function or an object
Router.route('/products', function() {
    this.render('products', {
        data: {
            products: Products.find()
        }
    });
});

Router.route('/addProduct');

// function () {
// 			templateData = {
// 				products: Products.find()
// 			};
// 			return templateData;
// 		}
