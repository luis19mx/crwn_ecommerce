import StripeCheckout from 'react-stripe-checkout';
import Logo from '../../assets/crown-stripe.png';

const StripeButton = ({ price }) => {
  const priceInCents = price * 100;

  const publishableKey =
    'pk_test_51HRwxSLEHn1B5sE1IPWOEriyqigAhMaqwZZFKhJO1KqVp27iSPVhkOajMhqVf2rtSWvSY2uR4Kpk4ywvs9wOSH3e00TrdQ6DNL';

  const onToken = (token) => console.log(token) || alert('payment successful');

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown E-Clothing"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceInCents}
      panelLabel="Pay Now"
      token={onToken}
      image={Logo}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
