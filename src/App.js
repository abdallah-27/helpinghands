
import './App.css';
import Home  from './Components/Home/Home.js'
import { NavLink, Route, Switch } from "react-router-dom"
import Details from "./Components/Services/Details.js"
import UserProfile from "./Components/userProfile/userProfile.js"
import Detailssidebar from './Components/Detailssidebarcomponent/Detailssidebar';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
    <div className='App_nav'>
      <Header></Header>
    </div>
    <div className='Home_div'>
     {/* <Home></Home> */}
    </div>


  
    </div>
  );
}

export default App;
