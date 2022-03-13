import './Header.css'
import { NavLink } from "react-router-dom";
import Detailssidebar from '../Detailssidebarcomponent/Detailssidebar';
import Home from '../Home/Home';
import { useNavigate } from "react-router-dom";
import { FaHandshake } from "react-icons/fa";
import { MdOutlineAccountCircle, MdOutlineHome } from "react-icons/md";
import { useCookies,cookies } from 'react-cookie';


const Header = () => {
    const [cookies, setCookie] = useCookies(['user']);
    const navigate = useNavigate();
    // console.log(cookies.data)
    const data = document.cookie.replace(/(?:(?:^|.*;\s*)data\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    console.log("datainhome:"+data)
    const userProfdirection=()=>{
    
        if ( data!= "null") {
           
            navigate("/UserProfile", { state: { data: data } });
          } else {
            navigate("/UserProfile", { state: null });
            
          }
        };

        const logout=()=>{
            console.log("logout button")
            setCookie('data',null, { path: '/' });
            console.log("cookieesssslogout:"+ data)
            navigate("/Home");

        }
    return (
        <div className="Header_div">
            <div className="image_div">
                <FaHandshake className='Handshake_icon' />
            </div>

            <div className="Heading_div">
            <h1> HelpingHands</h1>
           </div>

            <div className="Login_div">
                 <nav>
                    <NavLink to="/Home" exact><MdOutlineHome className='home_icon' /></NavLink>
                </nav>

            </div>

            <div className="Profile_div">
           
                   
            <button id="btn_profile" accept='image' name="file" className='profilebtn' onClick={userProfdirection} > </button>
            <MdOutlineAccountCircle className='account_icon' />     
            </div>

            <div className="Logout_div">
           
                   
            <button id="btn_profile" accept='image' name="file" className='logout' onClick={logout} > </button>
            <MdOutlineAccountCircle className='account_icon' />     
            </div>


        </div>
    )
}
export default Header;