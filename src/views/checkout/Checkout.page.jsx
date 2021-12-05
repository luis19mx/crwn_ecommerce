import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/CheckoutItem';
import StripeButton from '../../components/StripeButton';
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selectors';
import {
  CheckoutStyles,
  CheckoutHeader,
  Total,
  Warning,
} from './Checkout.styles';

const cartStore = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default function CheckoutPage() {
  const { cartItems, cartTotal } = useSelector(cartStore);

  return (
    <CheckoutStyles>
      <CheckoutHeader>
        <div>
          <span>Product</span>
        </div>
        <div>
          <span>Description</span>
        </div>
        <div>
          <span>Quantity</span>
        </div>
        <div>
          <span>Price</span>
        </div>
        <div>
          <span>Remove</span>
        </div>
      </CheckoutHeader>
      {cartItems.map(({ id, name, imageUrl, price, quantity }) => (
        <CheckoutItem key={id} item={{ id, name, imageUrl, price, quantity }} />
      ))}
      <Total>
        <span>TOTAL ${cartTotal}</span>
      </Total>
      <Warning>
        *Please use the following test card for payments: <br />
        5555 5555 5555 4444 - Exp: 01 / 23 - CVV: 123
      </Warning>
      <StripeButton price={cartTotal} />
    </CheckoutStyles>
  );
}
