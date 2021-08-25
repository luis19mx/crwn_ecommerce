import { Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home/home.page'
import ShopPage from './pages/shop/shop.page'
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.page'
import Header from './components/header/header.component'

const App = () => (
  <>
    <Header />
    <Route exact path="/" component={HomePage} />
    <Route path="/shop" component={ShopPage} />
    <Route path="/signin" component={SignInSignUpPage} />
  </>
)

export default App
