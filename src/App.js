import "./App.css";
import { NavLink, Route,Routes, Switch } from "react-router-dom";

import Listing from "./Components/Listing/Listing";
import UserProfile from "./Components/userProfile/UserProfile";
import Login from "./Components/Login/Login"
import MyDetails from "./Components/MyDetails.js/MyDetails";
function App() {
  return (
    <div className="App">
     
      <h1 className="websiteTitle">HelpingHands</h1>
{/*      
      <Routes>
      <Route path={'/'} element={<Login/>}>
        </Route>
        <Route path={'/UserProfile'} element={<UserProfile/>} >
        
        </Route>
      </Routes> */}
      {/* <Listing/> */}
      <MyDetails/>


    </div>
  );
}

export default App;
