Meteor.methods({
  'chargeCard': function(stripeToken) {
    var Stripe = StripeAPI('SECRET_KEY');

    Stripe.charges.create({
      amount: 1000,
      currency: 'usd',
      source: stripeToken
    }, function(err, charge) {
      console.log(err, charge);
    });
  }
});