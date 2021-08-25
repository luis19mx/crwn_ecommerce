import React from 'react'
import './App.css'
import Homepage from './pages/home/homepage.page'
import { Route } from 'react-router-dom'

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

const App = () => (
  <div>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/shop/hats" component={HatsPage} />
  </div>
)

export default App
