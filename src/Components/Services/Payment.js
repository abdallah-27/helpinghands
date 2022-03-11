import React, { useState ,useEffect } from "react";
import { Form, FormLabel } from "react-bootstrap";
import './Payment.css';
import PaymentData from "./PaymentData.json";
import PaymentReceipt from "./PaymentReceipt";
import {Link, Navigate, Route, Router, useNavigate} from "react-router-dom"


function Payment()  {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
    // const navigate = useNavigate();
    const handleSubmit = (event) => {
      event.preventDefault();
      var obj ={
        username: document.getElementById("username").value,
        surname: document.getElementById("surname").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        zip: document.getElementById("zip").value,
        year: document.getElementById("year").value,
        month: document.getElementById("month").value,
        // cvv: document.getElementById("cvv").value
      };
      // console.log(obj);
      PaymentData.push(obj);
      // navigate('/PaymentReceipt');
   
    }
    
    

   
    return (

      <div className="container">

            <form id="form" onSubmit={handleSubmit}>
              <div className="input-group">
                <label><h2>Billing Details</h2></label>
              </div>
              <div className="input-container">
                <label className="input-group">First name:
                  <input id="username" type="text" name="username" value={inputs.username || ""} onChange={handleChange}
                  />
                </label>
              </div>

              <div className="input-container">
                <label className="input-group">Last name:
                  <input id="surname" type="text" name="surname" value={inputs.surname || ""} onChange={handleChange}
                  />
                </label>
              </div>

              <div className="input-container">
                <label className="input-group">Email:
                  <input id="email" type="text" name="email" value={inputs.email || ""} onChange={handleChange}
                  />
                </label>
              </div>

              <label className="input-group">Phone:
                 <input id="phone" type="text" name="phone" value={inputs.phone || ""} onChange={handleChange}
                  />
              </label>

              <label className="input-group">Zip code:
                 <input id="zip" type="text" name="zip"  onChange={handleChange}
                  />
              </label>

                <h4>Card Expiration date</h4>
              <div className="input-grp">
                     <div className="input-container">
                       <h4>Year</h4>
                       <select id="year" name="year"  onChange={handleChange}>
                         <option value="January">January</option>
                         <option value="February">February</option>
                         <option value="March">March</option>
                         <option value="April">April</option>
                         <option value="May">May</option>
                         <option value="June">June</option>
                         <option value="July">July</option>
                         <option value="August">August</option>
                         <option value="September">September</option>
                         <option value="October">October</option>
                         <option value="November">November</option>
                         <option value="December">December</option>
                       </select>
                     </div>
                     <div className="input-container">
                         <h4>Month</h4>
                         <select id="month" name="month"  onChange={handleChange}>
                             <option value="2021">2021</option>
                             <option value="2022">2022</option>
                             <option value="2023">2023</option>
                             <option value="2024">2024</option>
                             <option value="2025">2025</option>
                             <option value="2026">2026</option>
                             <option value="2027">2027</option>
                             <option value="2028">2028</option>
                             <option value="2029">2029</option>
                         </select>
                     </div>
                     <div className="input-container">
                         <h4>CVV</h4>
                       <input name="cvv" type="password" placeholder="CVV" />
                    </div>
                    {/* <div className="radio input-grp">
                      <label>
                        Cash
                        <input type="radio" name="cash" id="cash" value={inputs.cash}/>
                      </label>
                      <label>
                        Paypal
                        <input type="radio" name="paypal" id="paypal" value={inputs.paypal}/>
                      </label>
                    </div> */}
                </div>
                

                <button to="/PaymentReceipt"  type="submit" onClick={handleSubmit}>Pay Now</button>
                
          </form>
        
        </div>

    );
    
}
    export default Payment; 