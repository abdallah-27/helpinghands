import React, { useState, useEffect } from "react";
import "./UserProfile.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
const UserProfileComponent = ({ Pname, Reviews, Status, Delete }) => {
  return (
    <div>
      <div className="MainCard2">
       
          <MDBCard className="card_comp2"> 
            <MDBCardBody>
              <img
                className="Card_compImg2"
                src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop"
                alt=""
              />
              <div className="cardContent2">
                <MDBCardText>Appointment Details</MDBCardText>
                <MDBCardTitle className="title2">Name: {Pname}</MDBCardTitle>
                <MDBCardText>{Reviews}</MDBCardText>
                <MDBCardText>{Status}</MDBCardText>
              </div>
              <MDBCardText className="price2">{Delete}</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
    
  );
};
export default UserProfileComponent;
