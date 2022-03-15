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

import { useNavigate } from "react-router-dom";
import { FaHandshake } from "react-icons/fa";
import { MdOutlineAccountCircle, MdOutlineHome,MdLogout } from "react-icons/md";
import { useCookies,cookies } from 'react-cookie';
// import '../Header.css'


const Listing = () => {
  const [cookies, setCookie] = useCookies(['user']);
    const navigate = useNavigate();
    // console.log(cookies.data)
    const data = document.cookie.replace(/(?:(?:^|.*;\s*)data\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    console.log("datainhome:"+data)
    const userProfdirection=()=>{
    
        if ( data!= "null") {
           
            navigate("/UserProfile", { state: { data: data } });
          } else {
            navigate("/UserProfile", { state: null });
            
          }
        };
    const homebtn=()=>{
      if ( data!= "null") {
            
          navigate("/Home", { state: { data: data } });
        } else {
          navigate("/Home", { state: null });
          
        }
      }
        const logout=()=>{
            console.log("logout button")
            setCookie('data',null, { path: '/' });
            console.log("cookieesssslogout:"+ data)
            navigate("/Home");

        }
  return (
    <div >
       <div className="container_listing">

     
<div className="CardPosition_listing">
  {
    <ListingCardComponent
      title="Anna Thomas"
      tag="Working as a dog walker since 2 years and can manage efficiently"
      age="Los Angeles, 26 years old"
      price="Price : 10$/hour"
      LicNo="AQ5468955564"
      imgsrc="https://sandbox-uploads.imgix.net/u/1647303869-d1052a0881eb8e5c00466cf534d73e87?w=700&h=500"
    />
  }

  {
    <ListingCardComponent
      title="Vivek Oberoi"
      tag="Working as a dog walker since 2 years and can manage efficiently"
      age="Los Angeles, 16 years old"
      price="Price : 10$/hour"
      LicNo="AQ5468955564"
      imgsrc="https://sandbox-uploads.imgix.net/u/1647303268-be14108293b689cfde0b5e058b9705c5?w=700&h=500"
    />
  }
  {
    <ListingCardComponent
      title="Ricky Jackson"
      tag="Working as a dog walker since 2 years and can manage efficiently"
      age="Los Angeles, 16 years old"
      price="Price : 10$/hour"
      LicNo="AQ5468955564"
      imgsrc="https://sandbox-uploads.imgix.net/u/1647303268-be14108293b689cfde0b5e058b9705c5?w=500&h=500"
    />
  }

  {/* {<BsHouseFill className="houseIcon" />} */}
</div>
<Widget />
     
      <div className="Header_div sticky">
            <div className="image_div2">
                <FaHandshake className='Handshake_icon2' />
            </div>

            <div className="Heading_div" style={{top:0}}>
            <h1 className="headingheader"> HelpingHands</h1>
           </div>
      <div className="icons_header">

            <div className="Login_div">
                <button id="btn_profile" accept='image' name="file" className='profilebtn' onClick={homebtn} >
                 <MdOutlineHome className='home_icon2'/>     
                </button>
            </div>

            <div className="Profile_div">
              <button id="btn_profile" accept='image' name="file" className='profilebtn_acc' onClick={userProfdirection} > 
              <MdOutlineAccountCircle className='account_icon2' />     
              </button>
            </div>

            <div className="Logout_div">
              <button id="btn_profile" accept='image' name="file" className='logout' onClick={logout} > 
              <MdLogout className='logout_icon2'/>
              </button>
            </div>
      </div>


        </div>
     
     
    
      <div className="results" >
        <h3 style={{ marginTop: "10%" }} >Results for your search</h3>
      </div>
    </div>
    {/* <div >
    <Header></Header>
    </div> */}
   
    </div>
  );
};

export default Listing;
