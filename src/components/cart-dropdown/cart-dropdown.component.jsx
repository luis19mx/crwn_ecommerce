import Button from '../button/button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-dropdown__items"></div>
    <Button type="button">Go to checkout</Button>
  </div>
);

export default CartDropdown;
