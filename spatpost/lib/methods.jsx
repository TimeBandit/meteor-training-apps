Meteor.methods({
  'chargeCard': function(stripeToken) {
    var Stripe = StripeAPI("sk_test_FU37KPHZzIrBlrL3ThtRaBBn");

    Stripe.charges.create({
      amount: 1000,
      currency: 'usd',
      source: stripeToken
    }, function(err, charge) {
      console.log(err, charge);
    });
  }
});