// import { NavLink } from "react-router-dom";
// import { Route, Switch, useHistory } from "react-router-dom";
// import Address from '../Services/Adress';
// import Payment from '../Services/Payment.js';
// import DateTime from '../Services/DateTime.js';
// import Details from "../Services/Details.js";
// import { useEffect } from "react";
// import './Detailssidebar.css';

// import {
//     MdFormatAlignJustify, MdPostAdd, MdAddLocationAlt, MdLocalSee,
//     MdFmdGood, MdVerified, MdLibraryAdd, MdWallpaper, MdInsertPhoto,
//     MdInsertInvitation, MdOutlineSubtitles, MdCreditCard
// } from "react-icons/md";
// import MenuItem from '@material-ui/core/MenuItem';
// import MenuList from '@material-ui/core/MenuList';

// const Detailssidebar = () => {

//     const history = useHistory();
//     useEffect(() => {
//         console.log("Componented about mounted");
//         console.log(history);
//         history.push("/details/generaldetails");


//     }, [])
//     return (

//         <div class="container">
//             <div class="row">
//                 <div class="col">
//                     <div className="left_div">
//                         <nav className="Details_nav">
//                             <div className="GD_div">
//                                 <div className="aa">
//                                     <MdFormatAlignJustify className="iconofdetail" />
//                                     <NavLink to="/details/generaldetails" exact>General Details</NavLink>
//                                 </div>
//                             </div>
//                             <div className="GD_div">
//                                 <div className="aa"  >
//                                     <MdAddLocationAlt className="iconofdetail" />
//                                     <NavLink className="aa" to="/details/address" exact>Address</NavLink>
//                                 </div>
//                             </div>
//                             <div className="GD_div">
//                                 <div className="aa">
//                                     <MdInsertInvitation className="iconofdetail" />
//                                     <NavLink className="aa" to="/details/datetime">Date and Time</NavLink>
//                                 </div>

//                             </div>
//                             <div className="GD_div">
//                                 <div className="aa">
//                                     <MdCreditCard className="iconofdetail" />
//                                     <NavLink className="aa" to="/details/payment">Payment</NavLink>
//                                 </div>

//                             </div>


//                         </nav>

//                         <Switch>
//                             <Route path="/details/generaldetails" component={Details}></Route>
//                             <Route path="/details/address" component={Address}></Route>
//                             <Route path="/details/datetime" component={DateTime}></Route>
//                             <Route path="/details/payment" component={Payment}></Route>
//                         </Switch>
//                     </div>
//                 </div>

//                 <div class="col-5">

//                 </div>
                
//                 <div class="col">

//                 </div>
//             </div>
//         </div>



//     )
// }


// export default Detailssidebar;