import { connect } from 'react-redux';

import './collection.styles.scss';
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item';

const CollectionPage = ({ collection }) => (
  <div className="collection">
    <h2 className="collection__title">{collection.title}</h2>
    <div className="collection__items">
      {collection.items.map((item) => (
        <CollectionItem key={item.id} {...{ item }} />
      ))}
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
