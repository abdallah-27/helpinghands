import React, { useState } from "react";
// import data from './data';
import data from "../../data";
import Filter from "../Filter/Filter";
import Slider from "./Slider";


const Home = () => {

    const [filter, setFilter] = useState('');

    const searchText = (event) =>{
        setFilter(event.target.value)
    }
    let dataSearch = data.cardData.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
            )
        });
        return (
            <div className="content">
            
            <Slider/>

            <div>
                <section className="py-4 container">
                    
                    <div className="row justify-content-center"> 

                    <div className="col-12 mb-5">
                        <div className="mb-3 col-4 mx-auto text-center">

                            <input
                            type="text"
                            placeholder="Search for more services"
                            className="form-control"
                            value={filter}
                            onChange ={searchText.bind(this)}/>

                        </div>
                        <div className="text-center">
                            </div>
                       
                    </div>
                        {dataSearch.map((item,index)=>{
                            return(
                                <div className="col-11 col-sm6 col-lg-3 mx-0 mb-4">
                                    <div className="card p-0 overflow-hidden h-100 shadow">
                                        <img src={item.img} className="card-body"/>
                                        <div className="card-body">
                                            <h5 className="card-title text-center text"> {item.title}</h5>
                                            <div className="text-center">
                                            <button type="button" className="btn btn-outline-success text-center" style={{textAlign:"center"}}>{item.desc}</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
        
             </div> 
            </div>
            
        );
    
}
    export default Home 