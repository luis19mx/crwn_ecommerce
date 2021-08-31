import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';
const { TOGGLE_CART_IS_HIDDEN, ADD_ITEM, REMOVE_ITEM } = CartActionTypes;
const INITIAL_STATE = {
  cartIsHidden: true,
  cartItems: [
    {
      id: 3,
      name: 'Brown Cowboy',
      imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
      price: 35,
      quantity: 1,
    },
  ],
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
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }
    default:
      return state;
  }
};

export default cartReducer;
