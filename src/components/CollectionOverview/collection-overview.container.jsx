import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../WithSpinner';
import CollectionsOverview from './CollectionOverview.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching, // same name as WithSpinner prop isLoading
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner,
)(CollectionsOverview);

export default CollectionsOverviewContainer;
