// configure the router..
Router.configure({
    layoutTemplate: 'layout'
});

// redirect logged out user from route 
// before any route is executed
var OnBeforeActions = {
    loginRequired: function() {
        if (!Meteor.userId()) {
            FlashMessages.sendSuccess('Yooooo, you\'re not logged in');
            Router.go('/');
        } else {
            // just continue
            this.next();
        };
    }
}

// Specify pages this action applies to
// pages you must be logged in to see
Router.onBeforeAction(OnBeforeActions.loginRequired, {
    only: ['addProduct', 'new.review']
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

// Router.route('/categories/:slug', {
//     data: function() {
//         templateData = {
//             category_products: Products.find({
//                 category: this.params.slug
//                 })

//         }
//         return templateData;
//     },
//     name: 'category.show'
// });

Router.route('/categories/:slug', function() {
    this.render('CategoryShow', {
        data: {
            category_products: Products.find({
                category: this.params.slug
            })
        }
    })
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
