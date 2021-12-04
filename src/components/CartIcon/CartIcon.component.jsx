import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartVisibility } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const storeSelectors = createStructuredSelector({
  itemsToCount: selectCartItemsCount,
});

export default function CartIcon() {
  const dispatch = useDispatch();
  const { itemsToCount } = useSelector(storeSelectors);

  const handleToggleCartVisibility = () => dispatch(toggleCartVisibility());

  return (
    <div className="cart-icon" onClick={handleToggleCartVisibility}>
      <ShoppingIcon className="cart-icon__icon" />
      <span className="cart-icon__count">{itemsToCount}</span>
    </div>
  );
}
