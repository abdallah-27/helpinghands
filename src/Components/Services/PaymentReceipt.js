import React, { useEffect } from "react";
import './Payment.css';

import PaymentData from "./PaymentData.json"



function PaymentReceipt() {
    return(
        <div className="container">
            <form id="form"> 
                <div className="posts">
                    {PaymentData.map(post =>{
                        return(
                            <div key={post.id}>
                            <h2 className="title">{post.username}</h2> 
                            <div className="row">
                                <h3>Name: {post.username}</h3>
                            </div>
                            
                            <div className="row">
                                <h3>Email: {post.email}</h3>
                            </div>
                            <div className="row">
                                <h3>Service Name: {post.serviceName}</h3>
                            </div>
                            <div className="row">
                                <h3>Payment Type: {post.paymentType}</h3>
                            </div>
                            <div className="row">
                                <h3>Amount: {post.amountPaid}</h3>
                            </div>
                            </div>
                        )
                    })}    
                </div>

                <div className="input-container mt">
                    <label><h2>Appointment confirmed</h2></label>
                    {/* <h4>Enter card number</h4> */}
                    {/* <input
                        placeholder="Please enter your credit card number"/> */}
                </div>
  
              {/* <div className="input-container"> */}
                  {/* <h4>Card Holder</h4> */}
                  {/* <input  type="text" placeholder="Please enter your full name" required/> */}
              {/* </div> */}
            </form>
        </div>

    )
}

export default PaymentReceipt