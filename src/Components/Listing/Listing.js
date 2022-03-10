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

const Listing = (props) => {
  
    return (
      <div>
         <div className="results"><h3>Results for dog-walking</h3></div>
         <Widget />
       

        <div className="CardPosition">
          {
            <ListingCardComponent
              title="Anna Thomas"
              tag="Working as a dog walker since 2 years and can manage efficiently"
              age="Los Angeles, 26 years old"
              price="Price : 10$/hour"
            />
          }

          {
            <ListingCardComponent
              title="Vivek Sharma"
              tag="Working as a dog walker since 2 years and can manage efficiently"
              age="Los Angeles, 16 years old"
              price="Price : 10$/hour"
            />
          }
                    {
            <ListingCardComponent
              title="Vivek Sharma"
              tag="Working as a dog walker since 2 years and can manage efficiently"
              age="Los Angeles, 16 years old"
              price="Price : 10$/hour"
            />
          }

          {/* {<BsHouseFill className="houseIcon" />} */}
        </div>
      </div>
    );
  
};

export default Listing;