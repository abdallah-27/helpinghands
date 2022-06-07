import React, { useState ,useEffect } from "react";
import { Form, FormLabel } from "react-bootstrap";
import './Payment.css';
import PaymentData from "./PaymentData.json";
import PaymentReceipt from "./PaymentReceipt";
import {Link, Navigate, Route, Router, useNavigate, useLocation} from "react-router-dom"
import Detailssidebar from "../Detailssidebarcomponent/Detailssidebar.js";
import Header from "../Header/Header";
import { FaHandshake } from "react-icons/fa";
import { MdOutlineAccountCircle, MdOutlineHome } from "react-icons/md";
import { NavLink } from "react-router-dom";
// import * as fs from 'fs'
function Payment()  {
    const location = useLocation();
    const toUserprof = () => {
        const data = document.cookie.replace(/(?:(?:^|.*;\s*)data\s*\=\s*([^;]*).*$)|^.*$/, "$1");
          console.log(location);
          console.log(location.state);
          console.log("datatdtadta"+data)
    
          
          if ( data == "null" || location.state == null ) {
            console.log("inside null");
            navigate("/UserProfile", { state: null });
          } else {
            navigate("/UserProfile", { state: { data: location.state.data } });
          }
    };
    const [inputs, setInputs] = useState({});
    
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }

    const navigate = useNavigate();

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
        price: document.getElementById("price").value,
        cash: document.getElementById("cash").value,
        paypal: document.getElementById("paypal").value,
      };

      navigate('/PaymentReceipt', { state: {data: obj}});
   
    }
    
    return (
      <div>
<div className="Header_div_home">
          <div className="image_div_home">
            <FaHandshake className="Handshake_icon_home" />
          </div>

          <div className="Heading_div_home">
            <h1> HelpingHands</h1>
          </div>

          <div className="Login_div_home">
            <nav>
              <NavLink to="/Home" exact>
                <MdOutlineHome className="home_icon_home" />
              </NavLink>
            </nav>
          </div>

          <div className="Profile_div">
            <MdOutlineAccountCircle className="account_icon_home" />
            <button
              id="btn_profile"
              accept="image"
              name="file"
              className="profilebtn_home"
              onClick={toUserprof}
            >
              {" "}
            </button>
          </div>
        </div>
        <Header/>
      
    <div className="center_content">
        <div>
               <Detailssidebar/>
           </div>
      <div className="container_Payment">
                    <form id="form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label><h2>Billing Details</h2></label>
                    </div>
                    <div className="input-container">
                        <label className="input-group test">First name:
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
                        <input id="zip" type="text" name="zip" onChange={handleChange}
                        />
                    </label>
                    
                    <label className="input-group">Amount to be paid:
                        <input id="price" type="text" name="price" onChange={handleChange}
                        />
                    </label>

                        <h4 className="method" style={{color:"white"}}>Payment Method</h4>
                <div className="payment_method">
                    <label className="input-group">Card Number:
                        <input id="card" type="text" name="card" onChange={handleChange}
                        />
                    </label>
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
                        </div>
                            <div className="radio input-grp">
                            <label>
                                Cash
                                <input type="radio" name="cash" id="cash" value={inputs.cash}/>
                            </label>
                            <label>
                                Paypal
                                <input type="radio" name="paypal" id="paypal" value={inputs.paypal}/>
                            </label>
                            </div>
                        </div>
                        

                        <button  type="submit" onClick={handleSubmit}>Pay Now</button>
                        
                </form>
           </div>
        
        </div>
      </div>

    );
    
}
    export default Payment; 