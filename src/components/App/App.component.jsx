import { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../store/user/user.selectors';
import { selectCartItems } from '../../store/cart/cart.selectors';
import { checkUserSession } from '../../store/user/user.actions';

import './App.css';
import Layout from '../Layout';
import HomePage from '../../views/home';
import ShopPage from '../../views/shop';
import SignInSignUpPage from '../../views/sign-in';
import CheckoutPage from '../../views/checkout';

const structuredSelectors = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartItems: selectCartItems,
});

export default function App() {
  const dispatch = useDispatch();

  const { cartItems, currentUser } = useSelector(structuredSelectors);

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
        {!!cartItems.length && (
          <Route path="/checkout">
            <CheckoutPage />
          </Route>
        )}
        {!currentUser && (
          <Route path="/signin">
            <SignInSignUpPage />
          </Route>
        )}
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}
