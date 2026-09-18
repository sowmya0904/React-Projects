import {Routes, Route} from 'react-router'
import './App.css'
import { HomePage } from './Pages/HomePage'
import {CheckOut} from './Pages/CheckOut'
function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/checkout" element={<CheckOut/>} />
    </Routes>
  )
}

export default App
