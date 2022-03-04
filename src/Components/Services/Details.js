import './Details.css';
import Detailssidebar  from "../Detailssidebarcomponent/Detailssidebar.js";
import Textlinecomponent from '../textlinecomponent/textlinecomponent';
import Textareacomponent from '../textareacomponent/Textareacomponent';


const Details = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col">
              <Detailssidebar/>
                </div>
                <div class="col-6">
                   <div className="center_div">
                       <h4>General Details</h4>
                       <h5>What is to be done?</h5>
                    <Textlinecomponent className="line"/>
                      <br></br>
                      <br></br>
                      <h5>Describe your order in detail</h5>
                      <Textareacomponent value="eg: Kindly get your own tools bitte"></Textareacomponent>
                      <br></br>
                      <h5>Add an attachments</h5>
                      <label className="fa fa-plus"></label>
                      <input type="file" id="myfile" name="myfile"/>
                    

                   </div>
                </div>
                <div class="col">
                   <div className="right_div">
                       <div className="Freelancersinfo_Div">
                           

                       </div>
                   </div>
                </div>
            </div>
          
        </div>
    )
}

export default Details;