import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component';
import WithSpinner from '../with-spinner/with-spinner.component';

import './collection-overview.styles.scss';

const CollectionOverview = ({ collections }) => (
  <>
     {!!collections && collections.map(({ id, ...props }) => (
      <CollectionPreview key={id} {...props} />
    ))}
  </>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default WithSpinner(connect(mapStateToProps)(CollectionOverview));
