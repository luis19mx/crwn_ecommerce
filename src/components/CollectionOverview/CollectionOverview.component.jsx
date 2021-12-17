import { compose } from 'redux';
import { connect, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../CollectionPreview';
import WithSpinner from '../WithSpinner';
import {
  selectCollectionsForPreview,
  selectIsCollectionFetching,
} from '../../store/shop/shop.selectors';

const structuredSelectors = createStructuredSelector({
  collections: selectCollectionsForPreview,
  isLoading: selectIsCollectionFetching,
});

function CollectionOverview() {
  const { collections } = useSelector(structuredSelectors);

  return !!collections
    ? collections.map(({ id, title, items, routeName }) => (
        <CollectionPreview
          key={id}
          title={title}
          items={items}
          routeName={routeName}
        />
      ))
    : null;
}

export default compose(
  connect(structuredSelectors),
  WithSpinner,
)(CollectionOverview);
