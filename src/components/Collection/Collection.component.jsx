import { compose } from 'redux';
import { connect, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import CollectionItem from '../CollectionItem';
import WithSpinner from '../WithSpinner';
import './collection.styles.scss';
import {
  selectCollection,
  selectIsCollectionLoaded,
} from '../../store/shop/shop.selectors';

const structuredSelectors = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoaded(state),
});

function CollectionPage() {
  const { collectionId } = useParams();

  const { collection } = useSelector((state) => ({
    collection: selectCollection(collectionId)(state),
  }));

  return (
    <div className="collection">
      <h2 className="collection__title">{collection.title}</h2>
      <div className="collection__items">
        {collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default compose(
  connect(structuredSelectors),
  WithSpinner,
)(CollectionPage);
