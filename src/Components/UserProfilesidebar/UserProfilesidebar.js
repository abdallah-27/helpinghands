import './UserProfilesidebar.css'
import { NavLink, Link } from 'react-router-dom';
import { MdFormatAlignJustify } from "react-icons/md";
import { Route, Routes, useNavigate,useLocation } from "react-router-dom";
import { useEffect } from "react";
const UserProfilesidebar=()=>{
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {

//  console.log(location);
//             console.log(location.state);
//             //console.log(location.state.data);
//             if(location.state == null){
//               console.log("inside null")
//               navigate('/UserProfile',{ state: null })
//             }
//             else {
//               navigate('/UserProfile',{ state: { data: location.state.data } })
//             }
//         console.log("Componented about mounted");
      
     
    }, [])
    const data = location.state.data
    return(
    <div className="UP_container">
    <div className="UP_left_div">
        <nav className="UP_Details_nav">
            <div className="UP_GD_div">
                <div className="UP_aa">
                    {/* <MdFormatAlignJustify className="UP_iconofdetail" /> */}
                  
                </div>
            </div>
            <div className="UP_GD_div">
                <div className="UP_aa"  >
                     <MdFormatAlignJustify className="UP_iconofdetail" />
                    <Link className="UP_aa" to="/MyDetails" >My Details</Link>
                </div>
            </div>
            <div className="UP_GD_div">
                <div className="UP_aa">
                    {/* <MdInsertInvitation className="UP_iconofdetail" /> */}
                    <Link className="UP_aa" to={{
                        state: { data: "loggeduser" },
                        pathname:"/UserProfile"
                       

                    }} >My Appointments</Link>
                </div>

            </div>

        </nav>

        {/* <Routes>
            <Route path="/details/generaldetails" component={Details}></Route>
            <Route path="/details/address" component={Address}></Route>
            <Route path="/details/datetime" component={DateTime}></Route>
            <Route path="/details/payment" component={Payment}></Route>
        </Routes> */}
    </div>



</div>
    )
}

export default UserProfilesidebar;