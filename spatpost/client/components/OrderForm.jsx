BuyButton = React.createClass({

	render: function() {
		return (
			<div />
		);
	}

});

OrderForm = React.createClass({
	getInitialState: function() {
		return {
			message: "",
			disabled: true
		};
	},

	onChange: function (e) {
		 e.preventDefault();
		 
		 if (e.target.value) {
		 	// entered value is less than 75
		 	if (e.target.value.length <= 75) {
		 		
		 		this.setState({
			 		message: e.target.value,
			 		disabled: false
		 		});
		 	} else {
			 	// disbale the button is string exceeds limit
			 	this.setState({
			 		disabled: true
			 	});
			 }
		 }else {
		 	// final char removed
		 	this.setState({
			 		message: "",
			 		disabled: true
		 		});
		 }
	},

	render: function() {
		return (
			<div>
				<textarea className="message" name="message" ref="message" 
				id="" cols="20" rows="10" onChange={this.onChange} 
				value={this.state.message}></textarea>

				<br/>
				<input type="button" value="dummy"/>

				<input className={this.state.disabled ? 'disabledText' : 'enabledText'} 
				type="button" value="BUY NOW" disabled={this.state.disabled}/>
			</div>
		);
	}

});