import { Component } from 'react'
import { Route } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { onSnapshot } from 'firebase/firestore'

import HomePage from './pages/home/home.page'
import ShopPage from './pages/shop/shop.page'
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.page'
import Header from './components/header/header.component'
import { auth, createUserDocument } from './firebase'

import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: null,
    }
  }
  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) return this.setState({ currentUser })

      const docRef = await createUserDocument(currentUser)

      try {
        await onSnapshot(docRef, (doc) =>
          // console.log(doc.data()) ||
          this.setState({
            currentUser: {
              id: doc.id,
              ...doc.data(),
            },
          }),
        )
      } catch (error) {
        console.error(error.stack)
      }
    })
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
