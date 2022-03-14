import * as React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import "./Listing.css";

import Data from "./data.json";
import { NativeSelect, FormControl } from "@material-ui/core";
import {
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
} from "mdb-react-ui-kit";

import { BsStarFill, BsStar, BsArrowRight, BsHouseFill } from "react-icons/bs";
import { useState } from "react";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import { Link } from "react-router-dom";
import Widget from "../FilterBarComponent/widget";

import ListingCardComponent from "../ListingCardComponent/ListingCardComponent";
import UserProfileComponent from "../userProfile/UserProfileComponent";
import Header from "../Header/Header";

const Listing = () => {
  return (
    <div >
     
<div className="container_listing
">
     
      <div className="CardPosition_listing">
        {
          <ListingCardComponent
            title="Anna Thomas"
            tag="Working as a dog walker since 2 years and can manage efficiently"
            age="Los Angeles, 26 years old"
            price="Price : 10$/hour"
            LicNo="AQ5468955564"
            imgsrc="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop"
          />
        }

        {
          <ListingCardComponent
            title="Vivek Oberoi"
            tag="Working as a dog walker since 2 years and can manage efficiently"
            age="Los Angeles, 16 years old"
            price="Price : 10$/hour"
            LicNo="AQ5468955564"
            imgsrc="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop"
          />
        }
        {
          <ListingCardComponent
            title="Ricky Jackson"
            tag="Working as a dog walker since 2 years and can manage efficiently"
            age="Los Angeles, 16 years old"
            price="Price : 10$/hour"
            LicNo="AQ5468955564"
            imgsrc="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop"
          />
        }

        {/* {<BsHouseFill className="houseIcon" />} */}
      </div>
      <Widget />
      
      <div style={{ marginTop: "-49%" }}>
        <Header></Header>
      </div>
      <div className="results" >
        <h3 style={{ marginTop: "10%" }} >Results for your search</h3>
      </div>
    </div>
    </div>
  );
};

export default Listing;
