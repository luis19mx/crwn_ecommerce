import { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { checkUserSession } from '../../redux/user/user.actions';
import './App.css';
import HomePage from '../../views/home';
import ShopPage from '../../views/shop';
import SignInSignUpPage from '../../views/sign-in-sign-up';
import CheckoutPage from '../../views/checkout';
import Header from '../Header';

const storeSelectors = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartItems: selectCartItems,
});

export default function App() {
  const dispatch = useDispatch();
  const { cartItems, currentUser } = useSelector(storeSelectors);

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

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
