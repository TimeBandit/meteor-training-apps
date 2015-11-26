// truncate text
Template.registerHelper('truncateText', function(text, length) {
    var newText;

    if (text.length < length) {
        newText = text;
    } else {
        // string a string between two indexes
        newText = text.substring(0, length);
        // returns a string of a certain length
        // newText = newText.substr(0, Math.min(newText.length, newText.lastIndexOf(' ')));
        newText = newText.substr(0, Math.min(newText.length, newText.lastIndexOf(' ')));
    };

    return new Spacebars.SafeString(newText);
});

// Get Average Rating
Template.registerHelper('getAvg',function (reviews) {
    var sum = 0;
    for (var i = 0; i < reviews.length; i++) {
        sum += parseInt(reviews[i].rating, 10);
        return Math.round(sum);
    };
})

// Get total amount of reviews
Template.registerHelper('getReviewsTotal', function (total) {
    if (total > 0) {
        return total;
    } else{
        return 0;
    };
});

Template.registerHelper('formatDate', function (date) {
    return moment(date).format('MM-DD-YYYY');
})