Checkout = React.createClass({
// <Carousel slides={this.getSlides()} />
	getSlides: function(){
		return [
			<div>i</div>,
			<div>am</div>,
			<div>a</div>,
			<div>cat</div>
			];
		},

	render: function() {
		return (
			<div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
			  <div className="modal-dialog" role="document">
			    <div className="modal-content">
			    	<div className="modal-header">
			        	<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			        	<h4 className="modal-title" id="myModalLabel">Almost There</h4>
			      	</div>
			      	<div className="modal-body">
			      		xxx
			      	</div>
			      	<div className="modal-footer">
			      		<button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
			        	{<button type="button" className="btn btn-primary">Save changes</button>}
			        </div>
			 	</div>
			  </div>
			</div>
		);
	}

});