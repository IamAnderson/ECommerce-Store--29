import React from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/ProductList' element={<ProductList />} exact />
          <Route path='/Product' element={<Product />} exact />
          <Route path='/SignUp' element={<Register />} exact />
          <Route path='/SignIn' element={<Login />} exact />
          <Route path='/Cart' element={<Cart />} exact />
        </Routes>
      </Router>
    </>
  )
}

export default App