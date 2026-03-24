import './App.css'
import Home from './views/home/Home.jsx';
import Coupons from './views/coupons/Coupons.jsx';
import CouponDetails from './views/coupon-details/CouponDetails.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home />}/>
        <Route path='/coupons' element= {<Coupons />}/>
        <Route path='/coupons/:id' element={<CouponDetails/>}/>
      </Routes>
    </BrowserRouter>
  )
}


