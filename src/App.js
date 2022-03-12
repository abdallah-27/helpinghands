import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from "./Components/Home/Home";
import './App.css'
import Payment from "./Components/Services/Payment";
import PaymentReceipt from "./Components/Services/PaymentReceipt";
import { NavLink, Route, Routes } from "react-router-dom";
import { Button } from "bootstrap";
import Slider from "./Components/Home/Slider";
function App() {
 
  return (
    <div className="App"> 
    
      <nav>
        <img src="https://cdn-icons-png.flaticon.com/512/2618/2618475.png" style={{width:70 , height:70}}/>
        <h1>Helping Hands</h1>
        {/* <NavLink to ="/" exact>Slider</NavLink> */}
        <NavLink to ="/Home" exact>Home</NavLink>
        <NavLink to ="/about">Services</NavLink>
        <NavLink to ="/products"><img src="https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png" style={{width:70 , height:70}}/></NavLink>
      </nav>
      
      <Routes>

         <Route path={'/Slider'} element={<Slider/>}></Route>

         <Route path={'/Home'} element={<Home/>}></Route>
         
         <Route path={'/Payment'} element={<Payment/>}></Route>

         <Route path={'/PaymentReceipt'} element={<PaymentReceipt/>}></Route>

      </Routes>

   
    </div>
  );
}

export default App;
