import { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home/home.page'
import ShopPage from './pages/shop/shop.page'
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.page'
import Header from './components/header/header.component'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: '',
    }
  }
  unsubscribeFromAuth = null

  componentDidMount() {
    const auth = getAuth()
    this.unsubscribeFromAuth = onAuthStateChanged(auth, (currentUser) =>
      this.setState({ currentUser }),
    )
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignUpPage} />
      </>
    )
  }
}

export default App
