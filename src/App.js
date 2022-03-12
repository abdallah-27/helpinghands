import "./App.css";
// import { NavLink, Route,Routes, Switch } from "react-router-dom";
import Home from './Components/Home/Home'
import Listing from "./Components/Listing/Listing";
import UserProfile from "./Components/userProfile/UserProfile";
import Login from "./Components/Login/Login"
import MyDetails from "./Components/MyDetails.js/MyDetails";
import { Route, Routes } from "react-router-dom";
import Detailssidebar from "./Components/Detailssidebarcomponent/Detailssidebar"
import Details from "./Components/Services/Details";
import Address from "./Components/Services/Address";
import Payment from "./Components/Services/Payment";
import PaymentReceipt from "./Components/Services/PaymentReceipt";
import UserProfilesidebar from "./Components/UserProfilesidebar/UserProfilesidebar";
function App() {
  return (
    <div className="App">
     
      <h1 className="websiteTitle">HelpingHands</h1>
      
         <Routes>
         <Route path={'/Home'} element={<Home/>} ></Route>
         <Route path={'/'} element={<Home/>} ></Route>

        <Route path={'/Listing'} element={<Listing/>} > </Route>
        <Route path="/MyDetails" element={<MyDetails/>}></Route>
       
        <Route path={"/details"} element = {<Detailssidebar/>}/>

        <Route path={"/details/generaldetails"} element = {<Details/>}/>

        <Route path={'/UserProfile'} element={<UserProfile/>} > </Route>

        <Route path={'/Login'} element={<Login/>} ></Route>

        <Route path="/details/address" element={<Address/>}></Route>
                           
        <Route path="/details/payment" element={<Payment/>}></Route>
        <Route path="/paymentReceipt" element={<PaymentReceipt/>}></Route>
        <Route path="/UserProfilesidebar" element={<UserProfilesidebar/>}></Route>
       
        
      </Routes>
    
           
 
      
      


    </div>
  );
}

export default App;
