import { connect } from 'react-redux';
import {
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({
  item,
  decreaseItemQuantity,
  increaseItemQuantity,
  removeItem,
}) => {
  const { imageUrl, name, quantity, price } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span
          className="quantity__arrow"
          onClick={() => decreaseItemQuantity(item)}
        >
          &#10094;
        </span>
        <span className="quantity__value">{quantity}</span>
        <span
          className="quantity__arrow"
          onClick={() => increaseItemQuantity(item)}
        >
          &#10095;
        </span>
      </span>
      <span className="price">$ {price}</span>
      <div className="remove-button" onClick={() => removeItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  decreaseItemQuantity: (item) => dispatch(decreaseItemQuantity(item)),
  increaseItemQuantity: (item) => dispatch(increaseItemQuantity(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
