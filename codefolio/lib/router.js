Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', {
    name: 'home',
    template: 'home'
});

Router.route('about');

Router.route('work');

Router.route('contact');

Router.route('/blog', {
    name: 'blog',
    template: 'blog'
})

// all the seperate onBeforeActions' could be done with
// one global one

Router.route('/admin/posts', {
    name: 'list_posts',
    template: 'list_posts',
    data: function() {
        // return template data when  returning
        // a cursor
        var templateData = {
            posts: Posts.find()
        }
        return templateData
    },
    onBeforeAction: function() {
        if (Meteor.user() === null) {
            Router.go('/')
        };
        this.next();
    }
});

Router.route('/admin/posts/add', {
    name: 'add_posts',
    template: 'add_posts',
    onBeforeAction: function() {
        if (Meteor.user() === null) {
            Router.go('/')
        };
        this.next();
    }
});

Router.route('/admin/posts/:_id/edit', {
    name: 'edit_post',
    template: 'edit_post',
    data: function() {
        // when you send pack a single object you dont
        // need to send a cursor in templatedata
        return Posts.findOne({
            _id: this.params._id
        })
    },
    onBeforeAction: function() {
        if (Meteor.user() === null) {
            Router.go('/')
        };
        this.next();
    }
});

Router.route('/admin/projects', {
    name: 'list_projects',
    template: 'list_projects',
    onBeforeAction: function() {
        if (Meteor.user() === null) {
            Router.go('/')
        };
        this.next();
    },
    data: function() {
        var templateDate = {
            project: Projects.find()
        }
        return templateDate;
    }
});

Router.route('/admin/projects/add', {
    name: 'add_project',
    template: 'add_project',
    onBeforeAction: function() {
        if (Meteor.user() === null) {
            Router.go('/')
        };
        this.next();
    }
});

Router.route('/admin/projects/:_id/edit', {
    name: 'edit_project',
    template: 'edit_project',
    data: function() {
        // when you send pack a single object you dont
        // need to send a cursor in templatedata
        return Projects.findOne({
            _id: this.params._id
        })
    },
    onBeforeAction: function() {
        if (Meteor.user() === null) {
            Router.go('/')
        };
        this.next();
    }
});

Router.route('/admin', {
    name: 'login',
    template: 'login'
});
