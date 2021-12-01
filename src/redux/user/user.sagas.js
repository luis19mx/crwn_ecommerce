import { takeLatest, put, all, call } from 'redux-saga/effects';
import UserActionTypes from './user.types';
import {
  auth,
  googleProvider,
  createUserDocument,
  getCurrentUser,
} from '../../firebase';
import {
  signOut,
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from '@firebase/auth';
import { getDoc } from '@firebase/firestore';
import {
  signInSuccess,
  signInFailure,
  signOutFailure,
  signOutSuccess,
  signUpFailure,
  signUpSuccess,
} from './user.actions';

export function* getDocSnapFromAuth(userAuth, additionalData) {
  const docRef = yield call(createUserDocument, userAuth, additionalData);
  const docSnap = yield getDoc(docRef);
  yield put(signInSuccess({ id: docSnap.id, ...docSnap.data() }));
}

export function* signInWithGoogle() {
  try {
    const { user } = yield signInWithPopup(auth, googleProvider);
    yield getDocSnapFromAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield signInWithEmailAndPassword(auth, email, password);
    yield getDocSnapFromAuth(user);
  } catch (error) {
    const {
      groups: { authError },
    } = error.message?.match(/\(auth\/(?<authError>.*)\)/);

    if (authError === 'wrong-password' || authError === 'user-not-found') {
      return yield put(signInFailure('Wrong credentials'));
    }

    if (authError === 'too-many-requests') {
      return yield put(
        signInFailure(`We couldn't process your sign in. Try again later`),
      );
    }

    yield put(signInFailure(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getDocSnapFromAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signOutUser() {
  try {
    yield signOut(auth);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* signUpUser({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getDocSnapFromAuth(user, additionalData);
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOutUser);
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUpUser);
}

export function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
