import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartVisibility } from '../../redux/cart/cart.actions';
import './cart-icon.styles.scss';

const CartIcon = ({ cartItems, toggleCartVisibility }) => (
  <div className="cart-icon" onClick={toggleCartVisibility}>
    <ShoppingIcon className="cart-icon__icon" />
    <span className="cart-icon__count">{cartItems.length}</span>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartVisibility: () => dispatch(toggleCartVisibility()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
