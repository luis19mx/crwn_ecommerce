import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD6TKbv9MBLAXg3UfhRy9IPT7rBpeCy1h0',
  authDomain: 'crwn-ecommerce-4ac77.firebaseapp.com',
  projectId: 'crwn-ecommerce-4ac77',
  storageBucket: 'crwn-ecommerce-4ac77.appspot.com',
  messagingSenderId: '901354777096',
  appId: '1:901354777096:web:433a42f90d1eada453bfbd',
  measurementId: 'G-93V76TKT2C',
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

const createUserDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  try {
    const userRef = doc(db, 'users', userAuth.uid);
    const user = await getDoc(userRef);
    if (!user.exists()) {
      const { uid: id, displayName, email } = userAuth;
      const createdAt = new Date();

      await setDoc(doc(db, 'users', id), {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    }
    return userRef;
  } catch (error) {
    console.error(error.stack);
    throw error;
  }
};

const SignInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    await GoogleAuthProvider.credentialFromResult(result);
  } catch (error) {
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.error(credential);
    throw error;
  }
};

const convertCollectionsSnapshotToMap = (collections) =>
  collections.docs
    .map((doc) => {
      const { title, items } = doc.data();
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items,
      };
    })
    .reduce(
      (map, collection) => ({
        ...map,
        [collection.title.toLowerCase()]: collection,
      }),
      {},
    );

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribeFromAuth = onAuthStateChanged(
      auth,
      (currentUser) => {
        unsubscribeFromAuth();
        resolve(currentUser);
      },
      reject,
    );
  });
};

export {
  createUserDocument,
  SignInWithGoogle,
  convertCollectionsSnapshotToMap,
  auth,
  db,
};
