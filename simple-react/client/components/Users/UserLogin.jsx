UserLogin = React.createClass({
	handleSubmit : function(e) {
		e.preventDefault();

		// refers to the current component
		var self = this;
		var email = self.refs.email.value;
		var password = self.refs.password.value;
		console.log(email, password);

		Meteor.loginWithPassword(email, password, function(err){
			if (err) {
				console.log(err.reason);
			} else{
				console.log('login success')
				FlowRouter.go('Home');
			};
		});
	},

	render: function() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-6 col-sm-offset-3">
						<h1>Login</h1>
						<form action="" onSubmit={this.handleSubmit}>
							<input type="text" ref="email" name="email" placeholder="Enter email..." className="form-control"/>
							<input type="password" ref="password" name="password" placeholder="Enter Password..." className="form-control"/>
							<input type="submit" value="Login" className="btn btn-default"/>
						</form>
					</div>
				</div>

			</div>
		);
	}
});