import { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../store/user/user.selectors';
import { selectCartItems } from '../../store/cart/cart.selectors';
import { checkUserSession } from '../../store/user/user.actions';
import Layout from '../Layout';
import Loading from '../Loading';

const HomePage = lazy(() => import('../../views/home'));
const ShopPage = lazy(() => import('../../views/shop'));
const SignInSignUpPage = lazy(() => import('../../views/sign-in'));
const CheckoutPage = lazy(() => import('../../views/checkout'));

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
        <Suspense fallback={<Loading />}>
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
        </Suspense>
      </Switch>
    </Layout>
  );
}
