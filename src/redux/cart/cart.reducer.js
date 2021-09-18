import CartActionTypes from './cart.types';
import { addItemToCart, decreasedItemQuantity } from './cart.utils';

const {
  TOGGLE_CART_IS_HIDDEN,
  ADD_ITEM,
  REMOVE_ITEM,
  DECREASE_ITEM_QUANTITY,
  INCREASE_ITEM_QUANTITY,
} = CartActionTypes;

const INITIAL_STATE = {
  cartIsHidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  const { payload: item } = action;

  switch (action.type) {
    case TOGGLE_CART_IS_HIDDEN:
      return {
        ...state,
        cartIsHidden: !state.cartIsHidden,
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, item),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== item.id,
        ),
      };
    case DECREASE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: decreasedItemQuantity(state.cartItems, item),
      };
    case INCREASE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
