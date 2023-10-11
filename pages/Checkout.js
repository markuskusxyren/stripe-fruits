import { useSWR } from 'swr';
import stripe from 'stripe';
import api from './api/create-checkout-session';

const Checkout = () => {
  const { data: checkoutSession } = useSWR(
    '../app/api/create-checkout-session',
    async () => {
      const response = await fetch('../app/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: 'YOUR_PRODUCT_ID',
          quantity: 1,
        }),
      });
      const json = await response.json();
      return json;
    }
  );

  if (!checkoutSession) {
    return <div>Loading...</div>;
  }

  const handleSubmit = async () => {
    // Use the Stripe library to redirect the user to the checkout page
    await stripe.redirectToCheckout({
      sessionId: checkoutSession.checkoutSessionId,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Checkout</button>
      </form>
    </div>
  );
};

export default Checkout;
