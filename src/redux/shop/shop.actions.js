import { collection, getDocs, query } from '@firebase/firestore';
import { convertCollectionsSnapshotToMap, db } from '../../firebase';
import ShopActionTypes from './shop.types';

export const updateCollections = (collectionsMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => async (dispatch) => {
  try {
    const collectionsQuery = query(collection(db, 'collections'));
    dispatch(fetchCollectionsStart());
    const collectionsSnapshot = await getDocs(collectionsQuery);
    const collectionsMap = convertCollectionsSnapshotToMap(collectionsSnapshot);
    dispatch(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    if (process.env.NODE_ENV === 'development') console.error(error.stack);
    dispatch(fetchCollectionsFailure(error.message));
  }
};