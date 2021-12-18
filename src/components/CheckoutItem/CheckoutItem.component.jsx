import { useDispatch } from 'react-redux';
import {
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from '../../store/cart/cart.actions';
import {
  CheckoutItemStyles,
  ImageContainerStyles,
  QuantityArrowStyles,
  QuantityStyles,
  QuantityValueStyles,
  RemoveStyles,
} from './CheckoutItem.styles';

export default function CheckoutItem({ item }) {
  const dispatch = useDispatch();

  const handleDecreaseItemQuantity = () => dispatch(decreaseItemQuantity(item));
  const handleIncreaseItemQuantity = () => dispatch(increaseItemQuantity(item));
  const handleRemoveItem = () => dispatch(removeItem(item));

  const { imageUrl, name, quantity, price } = item;

  return (
    <CheckoutItemStyles>
      <ImageContainerStyles>
        <img src={imageUrl} alt="" />
      </ImageContainerStyles>
      <span>{name}</span>
      <QuantityStyles>
        <QuantityArrowStyles onClick={handleDecreaseItemQuantity}>
          &#10094;
        </QuantityArrowStyles>
        <QuantityValueStyles>{quantity}</QuantityValueStyles>
        <QuantityArrowStyles onClick={handleIncreaseItemQuantity}>
          &#10095;
        </QuantityArrowStyles>
      </QuantityStyles>
      <span className="price">$ {price}</span>
      <RemoveStyles onClick={handleRemoveItem}>&#10005;</RemoveStyles>
    </CheckoutItemStyles>
  );
}
