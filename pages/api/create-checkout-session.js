const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const createCheckoutSession = async (req, res) => {
  const { productId, quantity } = req.body;

  // Create a Stripe checkout session
  const checkoutSession = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price: productId,
        quantity,
      },
    ],
    success_url: 'https://example.com/success',
    cancel_url: 'https://example.com/cancel',
  });

  // Return the checkout session ID to the client
  res.json({ checkoutSessionId: checkoutSession.id });
};

export default createCheckoutSession;
