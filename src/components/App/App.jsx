import { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from '../../pages/home/home.page';
import ShopPage from '../../pages/shop/shop.page';
import SignInSignUpPage from '../../pages/sign-in-sign-up/sign-in-sign-up.page';
import CheckoutPage from '../../pages/checkout/checkout.page';
import Header from '../header/header.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { checkUserSession } from '../../redux/user/user.actions';

function App({ cartItems, currentUser, checkUserSession }) {
  useEffect(() => checkUserSession(), [checkUserSession]);

  return (
    <>
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
      <Route
        path="/checkout"
        render={() =>
          !!cartItems.length ? <CheckoutPage /> : <Redirect to="/" />
        }
      />
      <Route
        exact
        path="/signin"
        render={() =>
          currentUser ? <Redirect to="/" /> : <SignInSignUpPage />
        }
      />
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
