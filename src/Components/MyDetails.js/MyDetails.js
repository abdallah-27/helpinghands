import * as React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";

import { Form, FormGroup, FormControl } from 'react-bootstrap';


const MyDetails = (props) => {

    return (
       
<div className="backCard">

     <div >Hello</div>
            <div className="container ">
                <div className="container col-md-10 ">
                    <h2 className="text-center">Edit Profile</h2>
                    <form >
                        <FormGroup className="col-md-12" >
                            <Form.Label>First Name</Form.Label>
                            <FormControl
                                type="text"
                                placeholder= {props.Fname}
                                name="Fname"
                                onChange={props.handleInputChange}
                            />
                            <Form.Control.Feedback />
                        </FormGroup>
                        <br />
                        <FormGroup className="col-md-12" >
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder= {props.Lname}
                                name="Lname"
                                onChange={props.handleInputChange}
                            />
                            <Form.Control.Feedback />
                        </FormGroup>
                        <br />
                        <FormGroup className="col-md-12" >
                            <Form.Label>Email</Form.Label>
                            <FormControl
                                type="email"
                                placeholder={props.email}
                                name="email"
                                onChange={props.handleInputChange}
                            />
                            <FormControl.Feedback />
                        </FormGroup>
                        <FormGroup className="col-md-12" >
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={props.phone}
                                name="phone"
                                onChange={props.handleInputChange}
                            />
                            <Form.Control.Feedback />
                        </FormGroup>
                        <FormGroup className="col-md-12" >
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder={props.address}
                                name="address"
                                onChange={props.handleInputChange}
                            />
                            <Form.Control.Feedback />
                            
                        </FormGroup>
                        
                    </form>
                    <div className="text-center">
                        <button className="btn btn-success " onClick={props.handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default MyDetails;