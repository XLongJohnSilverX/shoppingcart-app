
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import ItemGrid from './components/ItemGrid'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartPage from './components/CartPage'
import ItemPage from './components/ItemPage'
import {  useState } from "react";
import LandingPage from './components/LandingPage'

function App() {
  
  //cart is [{id: 1, qty: 2}]
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState('');
  const [cartTotal, setCartTotal] = useState(0);
  function addToCart(item){
    let foo = [...cart, item];
  
    setCart(foo);
    console.log("foo data"+ JSON.stringify(foo)); 
    setCartCount(cart.length +1 );
    setCartTotal(cartTotal + item.price);  
  }



  return (
    <>
     
    <Router>
    <NavBar cartCount={cartCount}></NavBar>
      <Routes> 
      <Route path="/" element={<LandingPage/>}/>
        <Route path="/products" element={<ItemGrid cart={cart} addToCartApp={addToCart}/>}/>
        <Route path="/cart" element={<CartPage cart={cart} totalPrice={cartTotal} addToCartApp={addToCart}   />}/>
        <Route path="/products/:id" element={<ItemPage addToCartApp={addToCart} cart={cart}/>}/>
      </Routes>

    </Router>
     
    
    </>
  )
}

export default App
