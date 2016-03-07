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
			disable: ""
		};
	},

	onChange: function (e) {
		 e.preventDefault();
		 let message = this.refs.message.value;

		 if (0 <= message.length <= 15) {
		 	this.setState({
		 		message: message,
		 	});
		 } else {
		 	this.setState({
		 		disable: "true" 
		 	});
		 }

		 
		 
		 console.log(message);
	},

	render: function() {
		return (
			<div>
				<textarea name="message" 
				ref="message" 
				id="" 
				cols="30" 
				rows="10" 
				onChange={this.onChange} 
				value={this.state.message}>
				</textarea>
				<br/>
				<input className={this.state.disable? 'disabledText' : null} type="button" value="test" disabled={this.state.disable}/>
			</div>
		);
	}

});