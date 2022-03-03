import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import * as React from "react";
import { render } from 'react-dom';
import ReactDOM from "react-dom";
import "./Listing.css";

import { NativeSelect, FormControl } from "@material-ui/core";
import {
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
} from "mdb-react-ui-kit";

import { BsStarFill, BsStar, BsArrowRight,BsHouseFill } from "react-icons/bs";
import { useState } from "react";
import CheckboxTree from 'react-checkbox-tree';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import { Link } from "react-router-dom";
import Widget from "../FilterBarComponent/widget";



const Listing = () => {

  return (
    <div>
      {/* <BsHouseFill className="houseIcon" /> */}
      <Widget/>
      
      <div className="MainCard">
      <div className="card_comp">
        <MDBCard >
          <MDBCardBody>
            <img
              className="Card_compImg"
              src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop"
              alt=""
            />
            <div className="cardContent">
              <MDBCardTitle className="title">Anna Thomas</MDBCardTitle>
              <MDBCardText>16 years, Los Angeles</MDBCardText>
              <MDBCardText>
                “Working part-time as a dog walker for more than 2 years ”
              </MDBCardText>
            </div>
            <MDBCardText className="price">Price: 10$/per hour</MDBCardText>
            <MDBCardText className="star">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStar />
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </div>
      <div className="card_comp">
        <MDBCard className="boxshadow">
          <MDBCardBody>
            <img
              className="Card_compImg"
              src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop"
              alt=""
            />
            <div className="cardContent">
              <MDBCardTitle className="title">Anna Thomas</MDBCardTitle>
              <MDBCardText>16 years, Los Angeles</MDBCardText>
              <MDBCardText>
                “Working part-time as a dog walker for more than 2 years ”
              </MDBCardText>
            </div>
            <MDBCardText className="price">Price: 10$/per hour</MDBCardText>
            <MDBCardText className="star">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStar />
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </div>

      <div></div>

        </div>
  
    </div>
  );
};

export default Listing;
