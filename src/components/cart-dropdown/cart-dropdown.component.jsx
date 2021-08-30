import { connect } from 'react-redux';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-dropdown__items">
      {cartItems.map((item) => (
        <CartItem key={item.id} {...{ item }} />
      ))}
    </div>
    <Button type="button">Go to checkout</Button>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
