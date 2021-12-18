import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartVisibility } from '../../store/cart/cart.actions';
import { selectCartItemsCount } from '../../store/cart/cart.selectors';
import { CartIconStyles, CountStyles, IconStyles } from './CartIcon.styles';

const structuredSelectors = createStructuredSelector({
  itemsToCount: selectCartItemsCount,
});

export default function CartIcon() {
  const dispatch = useDispatch();
  const { itemsToCount } = useSelector(structuredSelectors);

  const handleToggleCartVisibility = () => dispatch(toggleCartVisibility());

  return (
    <CartIconStyles onClick={handleToggleCartVisibility}>
      <IconStyles />
      <CountStyles>{itemsToCount}</CountStyles>
    </CartIconStyles>
  );
}
