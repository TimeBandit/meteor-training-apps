Template.registerHelper('currentRoute', function(route) {
    var currentRoute = Router.current().route.getName();
    
    return currentRoute === route
});
