import React, { useState, useEffect } from "react";
import "./userProfile.css";
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
      <div className="MainCard">
        <div className="card_comp">
          <MDBCard>
            <MDBCardBody>
              <img
                className="Card_compImg"
                src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop"
                alt=""
              />
              <div className="cardContent">
                <MDBCardText>Appointment Details</MDBCardText>
                <MDBCardTitle className="title">Name: {Pname}</MDBCardTitle>
                <MDBCardText>{Reviews}</MDBCardText>
                <MDBCardText>{Status}</MDBCardText>
              </div>
              <MDBCardText className="price">{Delete}</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
    </div>
  );
};
export default UserProfileComponent;
