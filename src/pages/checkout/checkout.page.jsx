import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeButton from '../../components/stripe-button/stripe-button.component';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, cartTotal }) => (
  <div className="checkout">
    <div className="checkout__header">
      <div className="checkout__header--block">
        <span>Product</span>
      </div>
      <div className="checkout__header--block">
        <span>Description</span>
      </div>
      <div className="checkout__header--block">
        <span>Quantity</span>
      </div>
      <div className="checkout__header--block">
        <span>Price</span>
      </div>
      <div className="checkout__header--block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(({ id, name, imageUrl, price, quantity }) => (
      <CheckoutItem key={id} item={{ id, name, imageUrl, price, quantity }} />
    ))}
    <div className="checkout__total">
      <span>TOTAL ${cartTotal}</span>
    </div>
    <div className="test-warning">
      *Please use the following test card for payments: <br />
      5555 5555 5555 4444 - Exp: 01 / 23 - CVV: 123
    </div>
    <StripeButton price={cartTotal} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
