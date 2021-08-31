import CartActionTypes from './cart.types';
const {
  TOGGLE_CART_IS_HIDDEN,
  ADD_ITEM,
  REMOVE_ITEM,
  DECREASE_ITEM_QUANTITY,
  INCREASE_ITEM_QUANTITY,
} = CartActionTypes;

export const toggleCartVisibility = () => ({
  type: TOGGLE_CART_IS_HIDDEN,
  payload: null,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  payload: item,
});

export const increaseItemQuantity = (item) => ({
  type: INCREASE_ITEM_QUANTITY,
  payload: item,
});

export const decreaseItemQuantity = (item) => ({
  type: DECREASE_ITEM_QUANTITY,
  payload: item,
});
