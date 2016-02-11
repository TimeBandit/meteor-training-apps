Home = React.createClass({

    render: function() {

        var borderRed = {
            border: '3px red solid'
        };

        var borderGreen = {
            border: '3px green solid'
        };

        var centre = {
            paddingLeft: '30px'
        };

        return (
        	<div className="headerwrap">
	            <div className="container">
					<div className="row">
						<div className="col-md-2 col-md-offset-2 quotes">
							<div className="row">
								<div className="col-md-12">
									<span className="quote-top">tired of sending cards</span>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12">
									<span className="quote-bottom">send something unusual</span>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="row">
								<div className="col-md-12 text-center">
									<a href="#" className="btn btn-default btn-lg buy-me-button">BUY ME £7</a>
								</div>
							</div>
						</div>
						<div className="col-md-2 quotes">
							<div className="row">
								<div className="col-md-12">
									<span className="quote-top">surprise someone</span>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12">
									<span className="quote-bottom">100% anonymous!</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
            );
    }

});