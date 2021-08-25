import { Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home/home.page'
import ShopPage from './pages/shop/shop.page'

const App = () => (
  <>
    <Route exact path="/" component={HomePage} />
    <Route path="/shop" component={ShopPage} />
  </>
)

export default App
