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

// Router.route('/categories/:slug', function() {
//     this.render('CategoryShow', {
//         data: {
//             category_products: Products.find({
//                 category: 'this.params.slug'
//             })
//         }
//     })
// }, {
//     name: 'category.show'
// });

Router.route('/categories/:slug', {
    data: function() {
        console.log(this.params.slug);
        return Products.find({
            category: this.params.slug
        });
    },

    name: 'category.show'
});

// using router options
Router.route('/new-review/:_id', {
    data: function() {
        return Products.findOne(
            this.params._id
        );
    },
    name: 'new.review'
});

Router.route('/product/:_id', {
    data: function() {
        return Products.findOne(
            this.params._id
        );
    },
    name: 'product.show'
});
