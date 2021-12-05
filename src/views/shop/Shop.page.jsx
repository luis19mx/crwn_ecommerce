import { useEffect } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCollectionsStart } from '../../store/shop/shop.actions';
import CollectionsOverview from '../../components/CollectionOverview';
import Collection from '../../components/Collection';

export default function ShopPage() {
  const match = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <>
      <Route exact path={`${match.path}`}>
        <CollectionsOverview />
      </Route>
      <Route path={`${match.path}/:collectionId`}>
        <Collection />
      </Route>
    </>
  );
}
