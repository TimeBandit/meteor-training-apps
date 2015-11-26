// on rendered handler
// https://atmospherejs.com/dandv/jquery-rateit
Template.CategoryShow.rendered = function () {
	// enable reatin package
	$('.rateit').rateit();
	console.log('cetegory.show rendered');
};