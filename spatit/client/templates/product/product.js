// on rendered handler
// https://atmospherejs.com/dandv/jquery-rateit
Template.ProductShow.rendered = function () {
	// enable reatin package
	$('.rateit').rateit();
};