
import './App.css';
import Home  from './Components/Home/Home.js'
import { NavLink, Route, Switch } from "react-router-dom"
import Details from "./Components/Services/Details.js"
import UserProfile from "./Components/userProfile/userProfile.js"


function App() {
  return (
    <div className="App">
    <nav className='App_nav'>
    <h1>Helping Hands</h1>
    <NavLink to="/details" exact>General Details</NavLink>
    
    
    <NavLink to="/" exact>Home</NavLink>
    </nav>
    <Switch>
       <Route path="/details" component = {Details}/>
      <Route path ="/" exact component={Home}/>
    </Switch>

  
    </div>
  );
}

export default App;
