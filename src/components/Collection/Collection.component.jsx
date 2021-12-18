import { compose } from 'redux';
import { connect, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import CollectionItem from '../CollectionItem';
import WithSpinner from '../WithSpinner';
import {
  selectCollection,
  selectIsCollectionLoaded,
} from '../../store/shop/shop.selectors';
import {
  CollectionStyles,
  ItemsStyles,
  TitleStyles,
} from './Collection.styles';

const structuredSelectors = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoaded(state),
});

function CollectionPage() {
  const { collectionId } = useParams();

  const { collection } = useSelector((state) => ({
    collection: selectCollection(collectionId)(state),
  }));

  return (
    <CollectionStyles>
      <TitleStyles>{collection.title}</TitleStyles>
      <ItemsStyles>
        {collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemsStyles>
    </CollectionStyles>
  );
}

export default compose(
  connect(structuredSelectors),
  WithSpinner,
)(CollectionPage);
