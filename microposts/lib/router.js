Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', function() {
    this.render('posts');
}, {
    name: 'posts'
});

Router.route('/about', function() {
    this.render('about');
});

Router.route('/profile', function() {
    this.render('profile');
});
