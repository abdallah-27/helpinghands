import React, { useEffect } from "react";
import './Payment.css';
import { Link, useLocation } from "react-router-dom";
import PaymentData from "./PaymentData.json"



function PaymentReceipt() {
    const location = useLocation();

    console.log(location);
    console.log(location.state.data.year);

    const year = location.state.data.year;
    const email = location.state.data.email;
   
    const zip = location.state.data.zip;
   
    const name = location.state.data.name;
   
    const month = location.state.data.month;
   
    const phone = location.state.data.phone;
    const username = location.state.data.username;

    const price = location.state.data.price;
    const cash = location.state.data.cash;
    const paypal = location.state.data.paypal;
   

    return(
        <div className="container">
            <form id="form"> 
                <div className="posts">
                    
                
                    {PaymentData.map(post =>{
                        return(
                            <div key={post.id}>
                            <h2 className="title">{name}</h2> 
                            <div className="row">
                                <h3>Name: {name}</h3>
                            </div>
                            
                            <div className="row">
                                <h3>Email: {email}</h3>
                            </div>
                            <div className="row">
                                <h3>Service Name: {post.serviceName}</h3>
                            </div>
                            <div className="row">
                                <h3>Payment Type: {paypal}</h3>
                            </div>
                            <div className="row">
                                <h3>Amount: {price}</h3>
                            </div>
                            </div>
                        )
                    })}    
                </div>

                <div className="input-container mt">
                    <label><h2>Appointment confirmed</h2></label>
                </div>
  
              
            </form>
        </div>

    )
}

export default PaymentReceipt