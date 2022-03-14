import React, { useState, useEffect } from "react";
import "./UserProfile.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Button } from "bootstrap";
const UserProfileComponent = ({ Pname, Reviews, Status, Delete }) => {
  return (
    <div style={{textAlign: "center"}}>
      <div style={{marginTop: "-31%"}} className="MainCard2">
       
          <MDBCard  className="card_comp2"> 
            <MDBCardBody>
              <img
                className="Card_compImg2"
                src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop"
                alt=""
              />
              <div className="cardContent2">
                <MDBCardText>Appointment Details</MDBCardText>
                <MDBCardTitle className="title2">{Pname}</MDBCardTitle>
                <MDBCardText className="reviews">Reviews:  {Reviews}</MDBCardText>
                <MDBCardText className="status">Status:  {Status}</MDBCardText>
               
                   <MDBCardText className="cancel"><button
                   type="submit"
                   className="btn btn-dark btn-lg"
                   onClick=""
                 >
                   {Delete}
                 </button></MDBCardText>
              
               
              </div>
             
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
    
  );
};
export default UserProfileComponent;
