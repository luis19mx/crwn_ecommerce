import {
  CartItemStyles,
  DetailsStyles,
  ImageStyles,
  NameStyles,
} from './CartItem.styles';

const CartItem = ({ item: { name, imageUrl, price, quantity } }) => (
  <CartItemStyles>
    <ImageStyles src={imageUrl} alt="" />
    <DetailsStyles>
      <NameStyles>{name}</NameStyles>
      <span>
        {quantity} &times; ${price}
      </span>
    </DetailsStyles>
  </CartItemStyles>
);

export default CartItem;
