Template.listsubscribers.events({
	'click .cancel-subscription': function (event) {
		Subscribers.remove(this._id);
		toastr.success('Plans Cancelled');
		return false;
	}
});