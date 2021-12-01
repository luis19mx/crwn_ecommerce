import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartVisibility } from '../../redux/cart/cart.actions';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';

const storeSelectors = createStructuredSelector({
  cartItems: selectCartItems,
});

export default function CartDropdown() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { cartItems } = useSelector(storeSelectors);

  const handleClick = () => {
    if (cartItems.length) {
      dispatch(toggleCartVisibility());
      history.push('/checkout');
    }
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-dropdown__items">
        {!!cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} {...{ item }} />)
        ) : (
          <span className="cart-dropdown__message">
            Any item you add to your cart <br />
            will be visible here.
          </span>
        )}
      </div>
      <Button
        type="button"
        onClick={handleClick}
        aria-disabled={!cartItems.length ? true : false}
      >
        Go to checkout
      </Button>
    </div>
  );
}
