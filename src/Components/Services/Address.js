
import { Route, Switch } from "react-router-dom";

import DateTime from "./DateTime.js"
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Payment from "./Payment.js"
import './Address.css';


const Address = () => {
return (
<div class="container">
<div class="row">
<div class="col">
<div className="left_div">
<nav className="Address_nav">


</nav>
<Switch>
<Route path="/details/address" component={Address} />
<Route path="/details/datetime" component={DateTime} />
<Route path="/details/payment" component={Payment} />
</Switch>
</div>
</div>
<div class="col-6">
<div className="center_div">
<h3>Add Address</h3>
<h4>Add your address where the contractor should arrive.</h4>
<h5>Street and house number:</h5>
<input type="text" id="Street_input" class="text-line" ></input>
<br></br>
<h6>Postal code:</h6>
<input type="text" id="PostalCode_input" class="text-line1" ></input>
<br></br>
<h7>City:</h7>
<input type="text" id="City_input" class="text-line2" ></input>
<br></br>
<h8>Additional information:</h8>
<textarea placeholder="e.g: Near a landmark. "/>
<br></br>

</div>
</div>
<div class="col">
<div className="right_div">

</div>
</div>
</div>

</div>
)
}


export default Address;