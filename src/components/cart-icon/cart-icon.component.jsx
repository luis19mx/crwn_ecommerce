import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartVisibility } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = ({ itemsToCount, toggleCartVisibility }) => (
  <div className="cart-icon" onClick={toggleCartVisibility}>
    <ShoppingIcon className="cart-icon__icon" />
    <span className="cart-icon__count">{itemsToCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemsToCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartVisibility: () => dispatch(toggleCartVisibility()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
