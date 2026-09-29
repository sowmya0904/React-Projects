import {Routes, Route} from 'react-router'
import './App.css'
import { HomePage } from './Pages/home/HomePage'
import {CheckOut} from './Pages/checkout/CheckOut'
import {OrdersPage} from './Pages/orders/OrdersPage'
import {TrackingPage} from './Pages/TrackingPage'
import {useState, useEffect} from 'react'
import axios from 'axios'
function App() {

    const[cartItems, setCartItems]=useState([]);
      const loadCart=async()=>{
    const res=await axios.get('api/cart-items?expand=product')
      setCartItems(res.data)
  };
useEffect(()=>{

  loadCart();
},[]);

  return (
    <Routes>
      <Route path="/" element={<HomePage  cart={cartItems} loadCart={loadCart}/>} />
      <Route path="/checkout" element={<CheckOut cart={cartItems} loadCart={loadCart} />} />
      <Route path="/orders" element={<OrdersPage cart={cartItems}/>} />
      <Route path="/tracking" element={<TrackingPage/>} />
    </Routes>
  )
}

export default App
