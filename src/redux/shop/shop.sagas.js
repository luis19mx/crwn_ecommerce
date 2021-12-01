import { takeLatest, call, put, all } from 'redux-saga/effects';
import { collection, getDocs, query } from '@firebase/firestore';
import { convertCollectionsSnapshotToMap, db } from '../../firebase';
import ShopActionTypes from './shop.types';
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shop.actions';

export function* fetchCollectionsStartAsync() {
  // yield console.log(`I'm fired`);
  try {
    const collectionsQuery = query(collection(db, 'collections'));
    const collectionsSnapshot = yield getDocs(collectionsQuery);
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      collectionsSnapshot,
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    if (process.env.NODE_ENV === 'development') console.error(error.stack);
    yield put(fetchCollectionsFailure(error.stack));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsStartAsync,
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
