import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home';
import Login from './pages/Login'
import Register from './pages/Register'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Cart from './pages/Cart'


const App = () => {
  return (
    <Router>
      <Navbar/>
    <div>
    <Switch>
  <Route exact path="/">
               <Home/>
               </Route>
               <Route  path="/Login">
               <Login/>
               </Route>
               <Route  path="/Register">
               <Register/>
               </Route>
               <Route  path="/ProductList">
               <ProductList/>
               </Route>
               <Route  path="/Product">
               <Product/>
               </Route>
               <Route  path="/Cart">
               <Cart/>
               </Route>
          </Switch>
          <Footer/>
    </div>
          </Router>
  )
 
};

export default App
