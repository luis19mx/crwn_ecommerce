import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import CollectionsOverviewContainer from '../../components/CollectionOverview';
import CollectionPageContainer from '../collection';

export default function ShopPage({ match }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart())
  }, [dispatch]);

  return (
    <>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </>
  );
}
