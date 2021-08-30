import CartActionTypes from './cart.types';
import { addItemToCart } from './cart.utils';
const { TOGGLE_CART_IS_HIDDEN, ADD_ITEM } = CartActionTypes;
const INITIAL_STATE = {
  cartIsHidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_IS_HIDDEN:
      return {
        ...state,
        cartIsHidden: !state.cartIsHidden,
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
