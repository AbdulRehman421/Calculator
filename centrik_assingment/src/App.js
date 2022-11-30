import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header';
import AllProducts from './pages/AllProducts'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Error from './pages/Error'
import { CartProvider } from './CartContext'
import SingleProduct from './pages/SingleProduct';
import { ProductProvider } from './ProductContext'

function App() {

  return (
    <ProductProvider>
      <CartProvider>
        <div className="App  bg-gray-900 text-white ">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} exact></Route>
              <Route path='/allProducts' element={<AllProducts />} ></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
              <Route path='/cart' element={<Cart />}></Route>
              <Route path='/items/:id' element={<SingleProduct />}></Route>

              <Route path='*' element={<Error />}></Route>
            </Routes>
          </BrowserRouter>
        </div >
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
