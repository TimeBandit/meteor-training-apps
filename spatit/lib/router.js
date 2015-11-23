// configure the router..
Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', function() {
        this.render('home', {
            data: {
                products: Products.find({
                    is_featured: "1"
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

Router.route('/addProduct', function() {
    this.render('addProduct', {
        data: {
            categories: Categories.find()
        }
    });
});

Router.route('/categories/:slug', function() {
    this.render('category_products', {
        data: {
            category_products: Products.find({category: this.params.slug})
        }
    })
}, {
    name: 'category_products'
});

// Router.route('/addProduct', {
//     data: function() {
//         templateData = {
//             categories: Categories.find() 
//         };

//         return templateData;
//     }
// });
