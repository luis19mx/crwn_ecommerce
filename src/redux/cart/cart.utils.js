export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id,
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, idItemToRemove) => [
  ...cartItems.filter(({ id }) => id !== idItemToRemove),
];

// };
// const index = cartItems.indexOf(
//   cartItems.find(({ id }) => id === idItemToRemove),
// );
// if (index >= 0) {
// cartItems.splice(index, 1);
// return [...cartItems];
// }
