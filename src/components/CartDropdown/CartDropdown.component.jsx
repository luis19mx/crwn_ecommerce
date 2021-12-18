import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../store/cart/cart.selectors';
import { toggleCartVisibility } from '../../store/cart/cart.actions';
import Button from '../Button';
import CartItem from '../CartItem';
import {
  CartDropdownStyles,
  ItemsStyles,
  MessageStyles,
} from './CartDropdown.styles.jsx';

const structuredSelectors = createStructuredSelector({
  cartItems: selectCartItems,
});

export default function CartDropdown() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { cartItems } = useSelector(structuredSelectors);

  const handleClick = () => {
    if (cartItems.length) {
      dispatch(toggleCartVisibility());
      history.push('/checkout');
    }
  };

  return (
    <CartDropdownStyles>
      <ItemsStyles>
        {!!cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <MessageStyles>
            Any item you add to your cart <br />
            will be visible here.
          </MessageStyles>
        )}
      </ItemsStyles>
      <Button
        type="button"
        onClick={handleClick}
        aria-disabled={!cartItems.length ? true : false}
      >
        Go to checkout
      </Button>
    </CartDropdownStyles>
  );
}
