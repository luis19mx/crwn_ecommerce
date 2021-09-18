import { Component } from 'react';
import { Route } from 'react-router-dom';
import { query, collection, onSnapshot } from '@firebase/firestore';
import { connect } from 'react-redux';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.page';
import { db, convertCollectionsSnapshotToMap } from '../../firebase';
import { updateCollections } from '../../redux/shop/shop.actions';

class ShopPage extends Component {
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
    return (
      <>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collections) => dispatch(updateCollections(collections)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
