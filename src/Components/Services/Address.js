import './Address.css'
import Detailssidebar from '../Detailssidebarcomponent/Detailssidebar';
import Textlinecomponent from '../textlinecomponent/textlinecomponent';
import Textareacomponent from '../textareacomponent/Textareacomponent';
import Butt from '../Button/Butt';
import { Component } from "react";
import SavedAddress from './Savedaddress';
import Header from '../Header/Header';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
  } from "mdb-react-ui-kit";


class Address extends Component{

    constructor(){
        super();
        this.state = {
            street_houseno:"" ,
            postal: 0,
            city: "",
            Addtionalinfo:"",
            Addressarray: [{id:1,street_houseno:"some street",postal:123,city:"somecity",Addtionalinfo:"addtionalinfo"}]
        
          }
    }

    addAddress = (e) => {
      
        console.log(e.target.value);
        console.log(e.target.id);
        if (e.target.id === "street") {
            this.setState({ street_houseno : e.target.value });
          }
          if (e.target.id === "postal") {
            this.setState({ postal : +e.target.value });
          }
          if (e.target.id === "city") {
            this.setState({ city : e.target.value });
          }
          if (e.target.id === "Additionalinfo") {
            this.setState({ Addtionalinfo : e.target.value });
          }
          
        
    }

    saveAddress =()=>{
        let { street_houseno, postal, city, Addtionalinfo,Addressarray } = this.state;

        let newAddress =
        {
          id: Math.random(),
          street_houseno :this.state.street_houseno,
          postal: this.state.postal,
          city: this.state.city,
          Addtionalinfo : this.state.Addtionalinfo
         
    
        
        };

         this.setState({Addressarray : [...Addressarray, newAddress]});
         console.log(`${Addressarray} NEW`) ;

    }

   

render (){
    let { street_houseno, postal, city, Addtionalinfo, Addressarray } = this.state;
return(
<div>
<div><Header></Header></div>
        <div className='content_address'> 
        
          <div>
            <Detailssidebar/>
          </div>
          
                <div className='writeaddress_div'>
                <h3>Address</h3>
                <h6 style={{ textAlign: "left"}}>Where your contractor should arrive</h6>
              
                <div className='innerAddress_div'>
                    <div className='Streethouse_div'>
                        <label>Street and House No.</label>
                        <br></br>
                        <Textlinecomponent type="text" value={street_houseno} id="street" addAddress={(e) => this.addAddress(e)} />
                    </div>

                    <div className='Postal_div'>
                        <label>Postal Code</label>
                        <br></br>
                        <Textlinecomponent className="Lines" value ={postal} id="postal" addAddress={(e) => this.addAddress(e)}/>
                    </div>

                    <div className='City_div'>
                        <label>City</label>
                        <br></br>
                        <Textlinecomponent value={city} id="city" addAddress={(e) => this.addAddress(e)} />
                    </div>

                    <div className='Additionalinfo_div'>
                        <label>Additional Information</label>
                        <br></br>
                        <Textareacomponent className="txtarea" placeholder ="eg: opposite to netto"  value={Addtionalinfo}
                         id="Additionalinfo" addAddress={(e) => this.addAddress(e)} />
                    </div>

                    <div className='Btn_div'>
                    <Butt nameofbtn="Save the address" buttonPress={()=> this.saveAddress()}></Butt>
                    <Butt nameofbtn="NEXT"  ></Butt> 
                    </div>

                </div>
            

            </div>
       


            <div className='rightaddress_div'>
                 <SavedAddress addressarray={Addressarray}/>
            </div>
        </div>

        </div>
    
)}
}
export default Address;