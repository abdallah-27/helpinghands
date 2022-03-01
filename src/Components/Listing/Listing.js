import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
import React from 'react';
import './Listing.css';
import { BsStarFill,BsStar } from "react-icons/bs";
import{useState} from 'react';

const Listing = () => {

    let[filter] = useState({
        
            Categories: [{ id: 1, name: 'Discover Music', hasChild: true, expanded: true },
            { id: 2, pid: 1, name: 'Hot Singles' },
            { id: 3, pid: 1, name: 'Rising Artists' },
            { id: 4, pid: 1, name: 'Live Music' },
            { id: 6, pid: 1, name: 'Best of 2017 So Far' }]
        

        
    });


    return(
        <div>
            <div className="card_comp"> 
            <MDBCard>
            <MDBCardBody>
             <img className="Card_compImg" src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop" alt=""/>
             <div className="cardContent">
             
             <MDBCardTitle className="title">Anna Thomas</MDBCardTitle>
             <MDBCardText>
              16 years, Los Angeles
              </MDBCardText>
              <MDBCardText>
             “Working part-time as a dog walker for more than 2 years ”
              </MDBCardText>
              </div>
              <MDBCardText  className="price">
                   Price: 10$/per hour  
              </MDBCardText>
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
            <MDBCard>
            <MDBCardBody>
             <img className="Card_compImg" src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop" alt=""/>
             <div className="cardContent">
             
             <MDBCardTitle className="title">Anna Thomas</MDBCardTitle>
             <MDBCardText>
              16 years, Los Angeles
              </MDBCardText>
              <MDBCardText>
             “Working part-time as a dog walker for more than 2 years ”
              </MDBCardText>
              </div>
              <MDBCardText  className="price">
                   Price: 10$/per hour  
              </MDBCardText>
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

            
     
            
        </div>
    )

}

export default Listing;