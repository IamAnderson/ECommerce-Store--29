import React from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Success from './pages/Success'
import { useSelector } from 'react-redux'
import Products from './pages/Products'


const App = () => {

  const { currentUser } = useSelector((state) => state.user)
  const user = currentUser

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/products/:category' element={<ProductList />} exact />
          <Route path='/product/:id' element={<Product />} exact />
          <Route path='/products' element={<Products />} exact />
          <Route path='/cart' element={<Cart />} exact />
          <Route path='/signup' element={<Register />} exact />
          <Route path='/signin' element={ user ? <Navigate to="/" /> : <Login />} exact />
          <Route path='/success' element={ <Success />} exact />
        </Routes>
      </Router>
    </>
  )
}

export default App