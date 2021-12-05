import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
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
