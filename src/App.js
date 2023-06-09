import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Product from './Pages/Product'
import Cart from './Pages/Cart'

import LogIn from './Pages/LogIn'
import Register from './Pages/Register'
import Checkout from './Pages/Checkout'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="/" exact element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
