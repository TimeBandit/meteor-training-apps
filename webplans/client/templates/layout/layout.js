// check value of the current route
Template.registerHelper('currentRoute', function(route) {
    var currentRoute = Router.current().route.getName();
    return currentRoute === route
});

// converts date into readable format
Template.registerHelper('formatDate', function(date) {
    return new Date(date).toDateString();
});

// calculate the end date from a fixed date
Template.registerHelper('getEndDate', function(join_date, days) {
    var end_date = join_date.setDate(join_date.getDate() + days)
    return new Date(end_date).toDateString();
});
