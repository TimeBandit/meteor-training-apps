// configure the router
Router.configure({
    layoutTemplate: 'layout'
});

// send the plans to the plans template
Router.route('/', {
    template: 'plans',
    name: 'plans',
    data: function() {
        templateData = {
            plans: Plans.find()
        };

        return templateData;
    }
});

Router.route('/myplans', {
    template: 'myplans',
    name: 'myplans'
});

Router.route('/admin/plans', {
    template: 'listplans',
    name: 'listplans',
    data: function() {
        templateData = {
            plans: Plans.find()
        };

        return templateData;
    }
});

Router.route('/admin/plans/add', {
    template: 'addplan',
    name: 'addplan'
});

// send one plan item to eh edit plan template
Router.route('/admin/plans/edit/:_id', {
    template: 'editplan',
    name: 'editplan',
    data: function() {
        var currentPlan = this.params._id;
        return Plans.findOne({
            _id: currentPlan
        });
    }
});

// send the subscriber to the template
Router.route('/admin/subscribers', {
    template: 'listsubscribers',
    name: 'listsubscribers',
    data: function() {
        templateData = {
            subscribers: Subscribers.find()
        };
        return templateData;
    }
});
