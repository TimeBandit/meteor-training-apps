Checkout = React.createClass({

	getSlideData() {
		return [
			{ active: true, text: "This is task 1" },
			{ active: false, text: "This is task 2" },
			{ active: false, text: "This is task 3" }
			];
		},

	renderSlides() {
		let data = this.getSlideData();
		var res = data.map((content, index) => {
			// return an array of react elements
	      	return <CarouselSlide key={index} content={content.text} />;
	      });
	      // console.log(res);
	      return res;
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
			      		{this.renderSlides()}
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