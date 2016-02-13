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
        	<span>
        		<div className="headerwrap">
        			<div className="container">
        				<div className="left">
        					<p className="quotes top-left" id="">tired of sending cards</p>
        					<p className="quotes" id="bottom-left">send something unusual</p>  
        				</div>
        				<div className="right">
        					<p className="quotes" id="top-right">surprise someone</p>
        					<p className="quotes" id="bottom-right">100% anonymous!</p>
        				</div>
        				<div id="btn" className="btn btn-default">BUY NOW £7</div>
        			</div>
				</div>
				<div className="twitterwrap">
					<div className="container">
						<div className="row">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sit et veritatis laborum nisi facilis labore optio, aut corporis dolor, dolores distinctio soluta nemo autem vel ullam iusto expedita accusantium!
							</p>
						</div>
					</div>
				</div>
        	</span>
            );
    }

});