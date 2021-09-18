import { Component } from 'react';
import { Route } from 'react-router-dom';
import { query, collection, onSnapshot } from '@firebase/firestore';
import { connect } from 'react-redux';

import { db, convertCollectionsSnapshotToMap } from '../../firebase';
import { updateCollections } from '../../redux/shop/shop.actions';
import CollectionPage from '../collection/collection.page';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);

class ShopPage extends Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  async componentDidMount() {
    const { updateCollections } = this.props;

    try {
      const collectionsQuery = await query(collection(db, 'collections'));
      this.unsubscribeFromSnapshot = await onSnapshot(
        collectionsQuery,
        (collectionsSnapshot) => {
          const collectionsMap =
            convertCollectionsSnapshotToMap(collectionsSnapshot);
          updateCollections(collectionsMap);
          this.setState({ loading: false });
        },
      );
    } catch (error) {
      console.error(error.stack);
    }
  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot();
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collections) => dispatch(updateCollections(collections)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
