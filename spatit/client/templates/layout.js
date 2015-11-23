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
