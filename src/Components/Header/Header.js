
// import handshake from './images/handshake.png';
import './Header.css'
import { NavLink, Route, Switch } from "react-router-dom";
import Detailssidebar from '../Detailssidebarcomponent/Detailssidebar';
import Home from '../Home/Home';


const Header=()=>{

    return(
        <div className="Header_div">
            <div className="image_div">
           {/* <img src={handshake}></img> */}
        
         

            </div>

            <div className="Heading_div">
            <nav>
         <NavLink to="/details" exact>Card Componenet</NavLink>
        <NavLink to="/" exact>Home</NavLink> 
         </nav>
         <Switch>
       <Route path="/details" component = {Detailssidebar}/>
      <Route path ="/" exact component={Home}/>
    </Switch>
            </div>

            <div className="Login_div">
                
            </div>

            <div className="Profile_div">

            </div>


        </div>
    )
}
export default Header;