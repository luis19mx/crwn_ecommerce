import './cart-item.styles.scss';

const CartItem = ({ item: { name, imageUrl, price, quantity } }) => (
  <div className="cart-item">
    <img className="cart-item__img" src={imageUrl} alt="" />
    <div className="cart-item__details">
      <span className="cart-item__name">{name}</span>
      <span className="cart-item__price">{quantity} &times; ${price}</span>
    </div>
  </div>
);

export default CartItem;
