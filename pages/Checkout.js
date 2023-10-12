import { loadStripe } from '@stripe/stripe-js';

export default async function checkout({ lineItems }) {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  let stripePromise = null;

  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(`${apiKey}`);
    }
    return stripePromise;
  };

  const stripe = await getStripe();

  await stripe.redirectToCheckout({
    lineItems,
    mode: 'payment',
    successUrl: `${window.location.origin}/Success`,
    cancelUrl: window.location.origin,
  });
}
