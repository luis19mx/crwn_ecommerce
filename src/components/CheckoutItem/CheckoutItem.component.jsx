import { useDispatch } from 'react-redux';
import './checkout-item.styles.scss';
import {
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from '../../store/cart/cart.actions';

export default function CheckoutItem({ item }) {
  const dispatch = useDispatch();

  const handleDecreaseItemQuantity = () => dispatch(decreaseItemQuantity(item));
  const handleIncreaseItemQuantity = () => dispatch(increaseItemQuantity(item));
  const handleRemoveItem = () => dispatch(removeItem(item));

  const { imageUrl, name, quantity, price } = item;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className="quantity__arrow" onClick={handleDecreaseItemQuantity}>
          &#10094;
        </span>
        <span className="quantity__value">{quantity}</span>
        <span className="quantity__arrow" onClick={handleIncreaseItemQuantity}>
          &#10095;
        </span>
      </span>
      <span className="price">$ {price}</span>
      <div className="remove-button" onClick={handleRemoveItem}>
        &#10005;
      </div>
    </div>
  );
}
