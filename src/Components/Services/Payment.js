import React, { useState ,useEffect } from "react";
import { Form, FormLabel } from "react-bootstrap";
import './Payment.css';
import PaymentData from "./PaymentData.json";
import PaymentReceipt from "./PaymentReceipt";
import {Route, Router, useHistory} from "react-router-dom"
const imageUrls = [
    "https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png",
  ]

   


function Payment()  {


  

    const [creditCardNum, setCreditCardNum] = useState('Payment');
    const [cardType, setCardType] = useState('')
    const [cardHolder, setCardHolder] = useState('Billing Details');
    const [expireMonth, setExpireMonth] = useState();
    const [expireYear, setExpireYear] = useState();
    const [cardTypeUrl, setCardTypeUrl] = useState('https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png');
    // const [flip, setFlip] = useState(null);
    
    const handleNum = (e) => {
      setCreditCardNum(e.target.rawValue);
    }
  
    const handleType = (type) => {
      setCardType(type);
      console.log(type);
  
      
    }
    
    const handleCardHolder = (e) => {
      setCardHolder(e.target.value);
    }
  
    const handleExpMonth = (e) => {
      setExpireMonth(e.target.value);
    }
  
    const handleExpYear = (e) => {
      setExpireYear(e.target.value);
    }
  
    // const country = {
    //     location:["Heidelberg","Mannheim","Stuttgart"],
    // }

    // const [receipt, setReceipt] = useState(null);
    // useEffect (() =>{
    //     setReceipt(PaymentData[0])
    // }, [])
    // const {fields} = receipt ??{};
    
    
   const handleSubmit = (event) => {
      console.log(event.target)
      event.preventDefault();
      var obj = {
            paymentMethod: document.getElementById("paymentType").value,
            email: document.getElementById("email").value,
            serviceName: document.getElementById("serviceName").value,
            cardNumber:document.getElementById("cardNumber").value
      }
      console.log(obj);
      PaymentData.push(obj);
      localStorage.setItem('data', JSON.stringify(obj))
    
    }


    

  // let history = useHistory();

    
    return (

    <div className="container">

        <form id="form" onSubmit={handleSubmit}>
            
            {/* <div id="card">
                    {data.form.sections.map(formData =>{
                      console.log("formData", formData);
                      return (
                        <div>
                          <h1>{formData.section_title}</h1>
                          {
                            formData.fields.map(inputData =>{
                              console.log("inputData", inputData);
                              return (
                                <div>
                                   <label>{inputData.label}</label>
                                   <input type={inputData.html_element} name={inputData.name} required={inputData.required
                                  }dataType={inputData.date_type}/>
                                </div>
                              )
                            })
                          }
                        </div>
                      )
                    })}
            </div> */}

            

              <div className="input-container mt">
                <label><h2>Payment Method--</h2></label>
                  {/* <h4>Enter card number</h4> */}
                  
              </div>
             
              
  
              <div className="input-container">
                  {/* <h4>Card Holder</h4> */}
                  <input id="paymentType"  type="text" placeholder="Please enter your full name" required/>
              </div>
              <div className="input-container">
                  {/* <h4>Card Holder</h4> */}
                  <input id="email"  type="text" placeholder="Please enter your mail" required/>
              </div>
              <div className="input-container">
                  {/* <h4>Card Holder</h4> */}
                  <input id="serviceName"  type="text" placeholder="Please enter Service" required/>
              </div>
              <div className="input-container">
                  {/* <h4>Card Holder</h4> */}
                  <input id="cardNumber"  type="text" placeholder="Please enter your card number" required/>
              </div>
  
                <div className="input-grp">
                    <div className="input-container">
                      <h4>Expiration Year</h4>
                      <select value={expireYear} onChange={handleExpYear}>
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
                        <select value={expireMonth} onChange={handleExpMonth}>
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
                        <input type="password" placeholder="CVV" required/>
                    </div>
                </div>

              <button type="submit" onClick={handleSubmit}>
                  {`Submit ${cardType} payment`}</button>

        </form>
    </div>
    );
    
}
    export default Payment; 