import * as React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./ListingCardComponent.css";
import { BsStarFill, BsStar, BsArrowRight, BsHouseFill } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";
import { Button } from "bootstrap";

const ListingCardComponent = ({title, tag, age, price}) => {
  return (
    <div>
  
      <div className="MainCard">
        <div>
        <Link to="/details">
          <MDBCard className="card_comp">
        
            <MDBCardBody className="CardImg">
            <img className="Card_compImg"
                src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop"
                alt=""
              />
              <div className="cardContent">
                
            
              
                <MDBCardTitle className="title">Name: {title}</MDBCardTitle>
                <MDBCardText className="tag">{tag}</MDBCardText>
                <MDBCardText className="age">{age}</MDBCardText>
             
              <MDBCardText className="price">{price}</MDBCardText>
              <MDBCardText className="star">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStar />
              </MDBCardText>
              </div>
            </MDBCardBody>
          
          </MDBCard>
          </Link>
        </div>
      </div>
     
    </div>
  );
};
export default ListingCardComponent;