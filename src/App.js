import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from "./Components/Home/Home";
import './App.css'
import Payment from "./Components/Services/Payment";
import PaymentReceipt from "./Components/Services/PaymentReceipt";
function App() {
 
  return (
    <div className="App"> 
      {/* <Home/> */}
      <Payment/>
      {/* <PaymentReceipt/> */}
    </div>
  );
}

export default App;
