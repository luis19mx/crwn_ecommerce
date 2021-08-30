import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import Button from '../button/button.component';

import './collection-item.styles.scss';

const CollectionItem = ({ item: { id, name, imageUrl, price }, addItem }) => (
  <div className="item">
    <div
      className="item__image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <Button
        onClick={() => addItem({ id, name, imageUrl, price })}
        className="item__cta button inverted"
      >
        Add to cart
      </Button>
    </div>
    <div className="item__footer">
      <span className="item__footer--name">{name}</span>
      <span className="item__footer--price">${price}</span>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
