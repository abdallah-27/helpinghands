
// import handshake from './images/handshake.png';
import './Header.css'
import { NavLink } from "react-router-dom";
import Detailssidebar from '../Detailssidebarcomponent/Detailssidebar';
import Home from '../Home/Home';

import { FaHandshake } from "react-icons/fa";
import { MdOutlineAccountCircle, MdOutlineHome } from "react-icons/md";



const Header = () => {

    return (
        <div className="Header_div">
            <div className="image_div">
                <FaHandshake className='Handshake_icon' />
            </div>

            <div className="Heading_div">
            <h1>HelpingHands</h1>
           </div>

            <div className="Login_div">
                 <nav>
                    <NavLink to="/Home" exact><MdOutlineHome className='home_icon' /></NavLink>
                </nav>

            </div>

            <div className="Profile_div">
           
            <MdOutlineAccountCircle className='account_icon' />             
            <button id="btn_profile" accept='image' name="file" className='profilebtn' > </button>
            </div>


        </div>
    )
}
export default Header;