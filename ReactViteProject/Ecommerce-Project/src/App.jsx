import {Routes, Route} from 'react-router'
import './App.css'
import { HomePage } from './Pages/HomePage'
import {CheckOut} from './Pages/CheckOut'
import {OrdersPage} from './Pages/OrdersPage'
import {TrackingPage} from './Pages/TrackingPage'
import {useState, useEffect} from 'react'
import axios from 'axios'
function App() {
    const[cartItems, setCartItems]=useState([]);
useEffect(()=>{
    
     axios.get('api/cart-items?expand=product')
        .then((res)=>setCartItems(res.data))
},[]);

  return (
    <Routes>
      <Route path="/" element={<HomePage  cart={cartItems}/>} />
      <Route path="/checkout" element={<CheckOut cart={cartItems} />} />
      <Route path="/orders" element={<OrdersPage/>} />
      <Route path="/tracking" element={<TrackingPage/>} />
    </Routes>
  )
}

export default App
