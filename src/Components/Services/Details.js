import './Details.css';
import Detailssidebar from "../Detailssidebarcomponent/Detailssidebar.js";
import Textlinecomponent from '../textlinecomponent/textlinecomponent';
import Textareacomponent from '../textareacomponent/Textareacomponent';
import { MdAddAPhoto, MdStarRate, MdVerified, MdStarHalf } from "react-icons/md";
import Butt from '../Button/Butt.js'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
} from "mdb-react-ui-kit";

const Details = () => {
    return (
        <div className="content">
           <div>
               <Detailssidebar />
           </div>

            
                        <div className="center_div">
                            <div className='Page_title'>
                            <h4>General Details</h4>
                            </div>
                         
                         <div className='subTitle'>

                         
                            <h5>What is to be done?</h5>
                            </div>
                            <Textlinecomponent className='line' />
                            <br></br>
                            <br></br>
                            <div className='DescDetail'>
                            <h5>Describe your order in detail</h5>
                            </div>
                            <Textareacomponent placeholder="eg: Get your own tools bitte"></Textareacomponent>
                            <br></br>
                            <div className='Addimage_div'>
                            <h5>Add images</h5>
                            </div>


                            <label className='label' htmlFor ='file'>
                                <i>
                                    <MdAddAPhoto className='addpht_icon' />
                                    <input type="file" id="file" accept='image' name="file" />
                                </i>
                            </label>

                            <div className='Btn_next_div'>
                                <Butt nameofbtn="NEXT" style={{ width: "80px", height: "40px" }}> </Butt>
                            </div>


                        </div>


                <div className="right_div">
              
                    <div className="Freelancersinfo_Div">
                        <div className='imagebox'>
                            <img></img>
                        </div>
                        <div className='freelance-information'>
                            <label className='name'>Name: Alex H. </label>
                            <br></br>
                            <label className='name'>28 yrs, Heidelberg</label>


                        </div>
                        <div className='freelanc_info'>
                            <MdStarRate className='star_rating'></MdStarRate>
                            <label className='rating_label'>4.8/5 (128 reviews)</label>
                            <div>
                                <label>Orders completed : 40</label>
                            </div>
                        </div>



                    </div>
                    


                    <div className="verified">
                        <MdVerified className='verification_icon' />
                        <div className='Id_div'>
                            <label className='label_ID'>ID Verified</label>
                        </div>

                    </div>

                    <div className='Ratingreview_div'>
                        <div className='Title_div'>
                            <label className='label_Review'>Reviews</label>
                        </div>
                        <div className='Photo_Reviewtitle_div'>
                            <div className='user_photo'>
                             <img className='pht_user' src="https://images.unsplash.com/photo-1622322062536-895d869b09ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="distressed Italian wall in pink and grey hues"></img> 
                            </div>

                            <div className='Review_title'>
                                <label>Very Professional</label>
                            </div>



                        </div>
                        <div className='reviewinwords'>
                            <label>something..........</label>
                        </div>
                        <div className='reviewinwordsandstars'>
                            <label className='line2_reviewwords'>something..........</label>
                            <label> </label>
                            <div className='star_div'>
                                <MdStarRate className='star1' />
                                <MdStarRate className='star1' />
                                <MdStarRate className='star1' />
                                <MdStarRate className='star1' />
                                <MdStarHalf className='star1' />
                            </div>
                        </div>

                    </div>
                </div>



            </div>

    )
}

export default Details;