// on rendered handler
// https://atmospherejs.com/dandv/jquery-rateit
Template.home.rendered = function () {
	// enable reatin package
	$('.rateit').rateit();
};