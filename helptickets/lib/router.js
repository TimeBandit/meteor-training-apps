Router.configure({
    layoutTemplate: 'layout'
});

var OnBeforeActions = {
    isStaff: function() {
        //if logged in
        
        if (Meteor.user()) {
            // check for staff

            if (Meteor.user().profile.usertype === 'staff') {
                console.log('im staff');
                Router.go('/staff');
            } else {
                console.log('im customer');
                this.next();
            };
        } else {
            this.next()
        };
    }
};

Router.onBeforeAction(OnBeforeActions.isStaff, {
    only: ['mytickets']
})

Router.route('/', {
    name: 'mytickets',
    template: "mytickets",
    data: function() {
        console.log('hello1');
        templateData = {
            tickets: Tickets.find({
                customer: Meteor.userId(),
            departments: Departments.find()
            })
        }
        return templateData;
    }

});

Router.route('/ticket/:_id', {
    template: 'ticket',
    data: function() {
        console.log('hello2');
        var currentTicket = this.params._id;
        return Tickets.findOne({
            _id: currentTicket
        });
    }
});

Router.route('/staff', {
    name: 'stafftickets',
    template: 'stafftickets',
    data: function() {
        templateData = {
            tickets: Tickets.find()
        };
        return templateData;
    },
});

Router.route('/staff/departments', {
    name: 'departments',
    template: 'departments',
    data: function() {
        templateData = {
            departments: Departments.find()
        };
        return templateData;
    },
});

Router.route('/staff/departments/add', {
    name: 'add_departments',
    template: 'add_departments'
});
