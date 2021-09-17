import { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot } from 'firebase/firestore';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth, createUserDocument, addCollectionAndDocuments } from './firebase';
import HomePage from './pages/home/home.page';
import ShopPage from './pages/shop/shop.page';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.page';
import CheckoutPage from './pages/checkout/checkout.page';
import Header from './components/header/header.component';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { selectCartItems } from './redux/cart/cart.selectors';
import { selectCollectionsForPreview } from './redux/shop/shop.selectors';

function _App_({ cartItems, currentUser, setCurrentUser, collectionsArray }) {
  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = onAuthStateChanged(auth, handleOnAuthStateChanged);

    const unsubscribeFromAuthFirebase = () => unsubscribeFromAuth();
    return unsubscribeFromAuthFirebase;

    async function handleOnAuthStateChanged(currentUser) {
      if (currentUser) {
        try {
          const docRef = await createUserDocument(currentUser);
          await onSnapshot(docRef, (doc) =>
            setCurrentUser({
              id: doc.id,
              ...doc.data(),
            })
          );

          setCurrentUser(currentUser);
          addCollectionAndDocuments(
            'collections',
            collectionsArray.map(({ title, items }) => ({ title, items }))
          );
        } catch (error) {
          console.error(error.stack);
        }
      }
    }
  }, [collectionsArray, setCurrentUser]);
  return (
    <>
      <Header />
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/checkout' render={() => (!!cartItems.length ? <CheckoutPage /> : <Redirect to='/' />)} />
      <Route exact path='/signin' render={() => (currentUser ? <Redirect to='/' /> : <SignInSignUpPage />)} />
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartItems: selectCartItems,
  collectionsArray: selectCollectionsForPreview,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(_App_);
