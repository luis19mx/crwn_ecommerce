import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems,
);

export const selectCartIsHidden = createSelector(
  [selectCart],
  (cart) => cart.cartIsHidden,
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((count, { quantity }) => count + quantity, 0),
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((count, { quantity, price }) => count + quantity * price, 0),
);