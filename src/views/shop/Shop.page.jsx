import { useEffect, lazy, Suspense } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCollectionsStart } from '../../store/shop/shop.actions';
import Loading from '../../components/Loading';

const Collection = lazy(() => import('../../components/Collection'));
const CollectionsOverview = lazy(() =>
  import('../../components/CollectionOverview'),
);

export default function ShopPage() {
  const match = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loading />}>
      <Route exact path={`${match.path}`}>
        <CollectionsOverview />
      </Route>
      <Route path={`${match.path}/:collectionId`}>
        <Collection />
      </Route>
    </Suspense>
  );
}
