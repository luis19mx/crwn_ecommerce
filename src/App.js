import { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot } from 'firebase/firestore';
import { connect } from 'react-redux';

import HomePage from './pages/home/home.page';
import ShopPage from './pages/shop/shop.page';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.page';
import Header from './components/header/header.component';
import { auth, createUserDocument } from './firebase';
import { setCurrentUser } from './redux/user/user.actions';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) return setCurrentUser(currentUser);

      const docRef = await createUserDocument(currentUser);

      try {
        await onSnapshot(docRef, (doc) =>
          // console.log(doc.data()) ||
          setCurrentUser({
            id: doc.id,
            ...doc.data(),
          }),
        );
      } catch (error) {
        console.error(error.stack);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            this.props.currentUser ? <Redirect to="/" /> : <SignInSignUpPage />
          }
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
