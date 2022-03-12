import * as React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import './UserProfile.css';
import UserProfileSidebar from '../UserProfilesidebar/UserProfilesidebar'

import Data from "./data.json";

import "react-checkbox-tree/lib/react-checkbox-tree.css";
import { Link, useLocation } from "react-router-dom";

import UserProfileComponent from "./UserProfileComponent";
import SimpleTabs from "../TabComponent/TabComponent";
import Detailssidebar from "../Detailssidebarcomponent/Detailssidebar";

const UserProfile = () => {
  const location = useLocation();
  console.log(location);
  console.log(location.state);
  //console.log(location.state.data);
  if(location.state == null){
    console.log("inside else");
    return (
      
      <div>
        <div>
     
  </div>
        <div className="Tabdiv">
          
          <SimpleTabs
            one={
              <div className="postLine">
                <h3 className="noLogin">Login to see appointments</h3>
              </div>
            }two={
              <div className="postLine">
                <h3 className="noLogin">Login to see appointments</h3>
              </div>
            }
          />
        </div>
      </div>
    );
  } else if (location.state.data == "loggeduser") {
    return (
      <div>
        <UserProfileSidebar/>
        <div>
       
      </div>
        <div className="Tabdiv">
      
          <SimpleTabs
            one={
              <div className="postLine">
                {Data.map((post) => {
                  return (
                    <div key={post.id}>
                      <UserProfileComponent
                        Pname={post.Pname}
                        Reviews={post.Reviews}
                        Status={post.Status}
                        Delete={post.Delete}
                      />
                    </div>
                  );
                })}
              </div>
            }two={
              <div className="postLineDone">
                
                  
                    <div >
                      <UserProfileComponent
                        Pname="Chris Mathews"
                        Reviews="4.8/5"
                        Status="Appointment Done"
                        Delete=""
                      />
                    </div>
                  
              
              </div>
            }
          />
        </div>
      </div>
    );
  } else if ((location.state.data =="loggeduserNoApp")) {
    return (
      <div>
        <div>
          
  </div>
        <div className="Tabdiv">
          <SimpleTabs
            one={
              <div className="postLine">
                <h3 className="noLogin">No appointments</h3>
              </div>
            }two={
              <div className="postLine">
                <h3 className="noLogin">No appointments</h3>
              </div>
            }
          />
        </div>
      </div>
    );
  } 

 
};

export default UserProfile;

{
  /* <ListingCardComponent 
      title="Anna Thomas"
      tag="Working as a dog walker since 2 years and can manage efficiently" 
      age="Los Angeles, 26 years old"
      price="10$/hour"/>  */
}

{
  /* <ListingCardComponent 
      title="Vivek Sharma"
      tag="Working as a dog walker since 2 years and can manage efficiently" 
      age="Los Angeles, 16 years old"
      price="10$/hour"/> */
}

{
  /* <BsHouseFill className="houseIcon" /> */
}
