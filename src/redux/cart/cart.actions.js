import CartActionTypes from './cart.types';
const { TOGGLE_CART_IS_HIDDEN } = CartActionTypes;

export const toggleCartVisibility = () => ({
  type: TOGGLE_CART_IS_HIDDEN,
  payload: null,
});
