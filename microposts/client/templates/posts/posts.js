// A template helper which returns a cursor to a sorted collection os posts
Template.posts.helpers({
    posts: function() {
        return Posts.find({}, {
            sort: {
                createdAt: -1
            }
        });
    }
});