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
const PreviousAppCard = ({ Pname, Reviews, Status, Delete }) => {
  return (
    <div style={{textAlign: "center"}}>
      <div className="MainCard2_previous">
       
          <MDBCard className="card_comp_previous"> 
            <MDBCardBody>
              <img
                className="Card_compImg2_previous"
                src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop"
                alt=""
              />
              <div className="cardContent2_previous">
                <MDBCardText>Appointment Details</MDBCardText>
                <MDBCardTitle className="title2_previous">Name: {Pname}</MDBCardTitle>
                <MDBCardText>Reviews: {Reviews}</MDBCardText>
                <MDBCardText>Status:{Status}</MDBCardText>
                
               
              </div>
             
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
    
  );
};
export default PreviousAppCard;
