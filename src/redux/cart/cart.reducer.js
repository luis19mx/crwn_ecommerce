import CartActionTypes from './cart.types';
import { addItemToCart, decreasedItemQuantity } from './cart.utils';

const INITIAL_STATE = {
  cartIsHidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  const { payload: item } = action;

  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_IS_HIDDEN:
      return {
        ...state,
        cartIsHidden: !state.cartIsHidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, item),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== item.id,
        ),
      };
    case CartActionTypes.DECREASE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: decreasedItemQuantity(state.cartItems, item),
      };
    case CartActionTypes.INCREASE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        ),
      };
    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
