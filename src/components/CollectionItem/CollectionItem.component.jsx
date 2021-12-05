import { useDispatch } from 'react-redux';
import { addItem } from '../../store/cart/cart.actions';
import Button from '../Button';
import './collection-item.styles.scss';

export default function CollectionItem({ item }) {
  const { name, imageUrl, price } = item;

  const dispatch = useDispatch();
  const addItemHandler = () => dispatch(addItem(item));

  return (
    <div className="item">
      <div
        className="item__image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <Button onClick={addItemHandler} className="item__cta button inverted">
          Add to cart
        </Button>
      </div>
      <div className="item__footer">
        <span className="item__footer--name">{name}</span>
        <span className="item__footer--price">${price}</span>
      </div>
    </div>
  );
}
