Test = React.createClass({
    componentDidMount: function() {
        console.log('im mounted')  ;
    },

    getInitialState: function() {
        var self = this;
        
        Meteor.call('fetchTweets', function(error, result){
            console.info('callback returning');
            self.setState({
                 tweets: result
             });
        });
        
        return {
            tweets: [] 
        };
    },

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

    renderTweets: function(){
        var res = [],
            tweets = this.state.tweets;
            console.info('inside renderTweets');
            // console.info(tweets); 

        var styles = {
            tweet: {
                margin: '5px',
                padding: '5px',
                width: '250px',
                boxShadow: '2px 2px 2px #777777'
            },
            img: {
                margin: '0px 0px 10px 0px',
                backgroundRepeat: 'no-repeat',
                width: '200px'     
            },
            text: {
                fontSize: '8pt',
                margin: '10px auto',
                borderBottom: '1px solid black',
                width: '150px',
                textAlign: 'center'
            },
            created_at: {
                marginTop: '5px',
                fontSize: '6pt'
            },
            grid_item: { 
                marginBottom: '10px'
            }
        }

        _.each(tweets, function(value, key, list){
                var {created_at, text, ...other} = value;
                
                let node = null;

                if (value.entities.media != undefined) {
                    // has image
                    // console.info(value.entities.media[0].media_url.toString());
                    // let imgPath = value.entities.media[0].media_url.toString();
                     console.log(value.entities.media[0].media_url);
                    // node = (
                    //     <div style={styles.tweet} className="tweet" key={key}>
                    //         <img style={styles.img} src={value.entities.media[0].media_url} alt=""/>
                    //         <div style={styles.text} className="text">{text}</div>
                    //         <div style={styles.created_at} className="created_at">{created_at}</div>
                    //     </div>                        
                    // );
                    // let bgImg = {backgroundImage: url(imgPath)};
                    // let bgImg = {backgroundImage: ""};
                    node = (
                        <div className="grid-item" key={key}>
                            <img style={styles.img} src={value.entities.media[0].media_url} alt=""/>
                            <div style={styles.text} className="text">{text}</div>
                        </div>                        
                    );
                    
                };
                // console.info(node);
                res.push(node);
            });
        return res;      
    },

	render: function() {
        var container = {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            border: '1px red solid'        
        }

        var data_masonry = {
            itemSelector: ".grid-item",
            columnWidth: '200'
        }

        return (
			<div>
				<form action="/charge" method="POST">
                    <label htmlFor="test">Test Input</label>
                    <input type="text" name="test" />
                    <a href="#" className="btn btn-default" onClick={this.handlePayment}>BUY NOW</a>
                </form>
                <div className="grid">{this.renderTweets()}</div>
			</div>			
		);
	}
});