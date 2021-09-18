import { doc, getDocs, collection, writeBatch } from 'firebase/firestore';

import { db } from '../src/firebase/index.js';
import invokeShopData from '../src/data/shop.data.js';

const collections = invokeShopData();

const collectionsArray = Object.keys(collections).map((key) => ({
  ...collections[key],
  items: collections[key].items,
}));

(async function addCollectionAndDocuments(collectionKey, objectsToAdd) {
  try {
    const collectionRef = await getDocs(collection(db, collectionKey));
    if (collectionRef.empty) {
      const batch = writeBatch(db);
      objectsToAdd.forEach(async ({ title, items }) => {
        const ref = doc(collection(db, collectionKey));
        batch.set(ref, { title, items });
      });
      await batch.commit();
    }
    console.log('Process with no errors. Check firestore console');
    process.exit();
  } catch (error) {
    console.error(error.stack);
  }
})(
  'collections',
  collectionsArray.map(({ title, items }) => ({ title, items })),
);
