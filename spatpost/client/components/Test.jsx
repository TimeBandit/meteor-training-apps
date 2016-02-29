Test = React.createClass({
	handlePayment: function(e){
		e.preventDefault();
		console.log(Meteor.settings);
		StripeCheckout.open({
            key: Meteor.settings.public.stripe,
            amount: 5000, // this is equivalent to $50
            name: 'Meteor Tutorial',
            description: 'On how to use Stripe ($50.00)',
            panelLabel: 'Pay Now',
            token: function(res) {
            	stripeToken = res.id;
              	console.info(res);
              	Meteor.call('chargeCard', stripeToken);
            }
          });
	},

    getTweets: function(){
        var args = {
            count: 3,
            user_id: 'ImranNazirMir',
            screen_name: 'ImranNazirMir'
        }
        
        T.get('statuses/user_timeline', args,  function (err, data, response) {
            console.log(data)
        })
    },

	render: function() {
		return (
			<div>
				<form action="/charge" method="POST">
                    <label htmlFor="test">Test Input</label>
                    <input type="text" name="test" />
                    <a href="#" className="btn btn-default" onClick={this.handlePayment}>BUY NOW</a>
                </form>
                <button onClick={this.getTweets}>Get Tweets</button>
			</div>
			
		);
	}

});