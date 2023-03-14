import logo from './logo.svg';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Hommey from './Pages/Hommey';
function App() {
  return (
    <>
    <Navbar/>
    
    <Routes>
      <Route path='/products' element={<Products />}/>
      <Route path= '/products/:id' element={<Product/>}/>
      <Route path='/about' element={<Products />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/'exact element={<Home />}/>
    </Routes>
    
    </>
  );
}

export default App;
