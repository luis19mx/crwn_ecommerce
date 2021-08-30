import CartActionTypes from './cart.types';
const { TOGGLE_CART_IS_HIDDEN } = CartActionTypes;
const INITIAL_STATE = { cartIsHidden: true };

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_IS_HIDDEN:
      return {
        ...state,
        cartIsHidden: !state.cartIsHidden,
      };
    default:
      return state;
  }
};

export default cartReducer;
