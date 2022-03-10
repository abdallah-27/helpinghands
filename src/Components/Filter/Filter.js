import React, { useState, useEffect } from "react";
import App from "../../App";
import styles from "./Filter.css";
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
import data from "../../data";
import 'bootstrap/dist/css/bootstrap.min.css';
import {DropdownButton,Dropdown} from 'react-bootstrap'

class Filter extends React.Component
{
    filter = {
        location:["Heidelberg","Mannheim","Stuttgart"],
        categories:["Home Services", "Professional Services"],
        price:["20","35","60"],
        review: ["Lowest", "Highest"]
    }

    render()
    {
        return(
            <nav className="dropdown">
                <DropdownButton id="dropdown-basic-button" variant ="success" title="Location">
                    {this.filter.location.map((data,index) =>(
                        <div key={index}><Dropdown.Item >{data}</Dropdown.Item></div>
                    
                    ))}
                </DropdownButton>

                <DropdownButton id="dropdown-basic-button" variant ="success" title="Categories">
                {this.filter.location.map((data,index) =>(
                        <div key={index}><Dropdown.Item >{data}</Dropdown.Item></div>
                    
                    ))}
                </DropdownButton>

                <DropdownButton id="dropdown-basic-button" variant ="success" title="Price Range">
                {this.filter.location.map((data,index) =>(
                        <div key={index}><Dropdown.Item >{data}</Dropdown.Item></div>
                    
                    ))}
                </DropdownButton>

                <DropdownButton id="dropdown-basic-button" variant ="success" title="Review">
                {this.filter.location.map((data,index) =>(
                        <div key={index}><Dropdown.Item >{data}</Dropdown.Item></div>
                    
                    ))}
                </DropdownButton>
            </nav>
        )
    }
}
export default Filter;