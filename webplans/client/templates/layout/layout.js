Template.registerHelper('currentRoute', function(route) {
    var currentRoute = Router.current().route.getName();
    return currentRoute === route
});

Template.registerHelper('formatDate', function(date) {
    return new Date(date).toDateString();
});

Template.registerHelper('getEndDate', function(join_date, days) {
    var end_date = join_date.setDate(join_date.getDate() + days)
    return new Date(end_date).toDateString();
});
