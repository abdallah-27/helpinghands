import { NavLink } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Address from '../Services/Address.js';
import Payment from '../Services/Payment.js';
import DateTime from '../Services/DateTime.js';
import Details from "../Services/Details.js";
import './Detailssidebar.css';
import Dummy from "./dummy"; 
import { MdFormatAlignJustify, MdFmdGood, MdInsertInvitation, MdOutlineSubtitles } from "react-icons/md";


import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';




const Detailssidebar = () =>{
    return(
       <div className="left_div">
       <nav className="Details_nav">
        <div className="GD_div">   
        <div  className="aa">
        <MdFormatAlignJustify className="iconofdetail"/>
       <NavLink to="/details" exact>General Details</NavLink>
       </div>
       </div>
       <div className="GD_div">
           <div className="aa"  >
       <MdFmdGood className="iconofdetail"/>
       <NavLink className="aa" to="/details/address" exact>Address</NavLink>
       </div>
       </div>
       <div className="GD_div">
        <div className="aa">          
         <MdInsertInvitation className="iconofdetail"/>
       <NavLink className="aa" to="/details/datetime">Date and Time</NavLink>
       </div>

       </div>
       <div className="GD_div">
           <div className="aa">           
           <MdOutlineSubtitles className="iconofdetail"/>
       <NavLink className="aa" to="/details/payment">Payment</NavLink>
       </div>

       </div>
           
       
       </nav>

       <Switch>
       <Route path="/details/address" component={Address}></Route>
       <Route path="/details/datetime" component={DateTime}></Route>
       <Route path="/details/payment" component={Payment}></Route>
       </Switch>
       </div>
    )
}


export default Detailssidebar;