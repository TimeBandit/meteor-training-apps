Template.add_posts.events({
    'submit .add_post_form': function(event) {
        var title = event.target.title.value;
        var body = event.target.body.value;

        // insert post
        Posts.insert({
            title: title,
            body: body
        });

        FlashMessages.sendSuccess('Post Added');
        Router.go('/admin/posts');

        // prevent sumbit
        return false;
    }
});

Template.edit_post.events({
    'submit .edit_post_form': function(event) {
        var title = event.target.title.value;
        var body = event.target.body.value;

        // posts post
        Posts.update({
            _id: this._id
        }, {
            $set: {
                title: title,
                body: body
            }
        });

        FlashMessages.sendSuccess('Post Updated');
        Router.go('/admin/posts');

        // prevent sumbit
        return false;
    }
});


Template.list_posts.events({
    'click .delete_post': function(event) {
        Posts.remove(this._id);

        FlashMessages.sendSuccess('Post Deleted');
        
        // prevent sumbit
        return false;
    }
});
