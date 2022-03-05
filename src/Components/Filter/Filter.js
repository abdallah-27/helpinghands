import React, { useState, useEffect } from "react";
import App from "../../App";
import styles from "./Filter.css";
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
import data from "../../data";
import 'bootstrap/dist/css/bootstrap.min.css';
import {DropdownButton,Dropdown} from 'react-bootstrap'
// const Filter = () => {
//   const [filter, setFilter] = useState([]);

//   useEffect(() => {}, []);

//   return (
//       <nav>
//         <Dropdown>
//             <Dropdown.Toggle variant="success" id="dropdown-basic">
//                 Location
//             </Dropdown.Toggle>

//             <Dropdown.Menu>
//                 <Dropdown.Item>Another action</Dropdown.Item>
//                 <Dropdown.Item>Action</Dropdown.Item>
//                 <Dropdown.Item>Something else</Dropdown.Item>
//             </Dropdown.Menu>
//         </Dropdown>

//         <Dropdown>
//             <Dropdown.Toggle variant="success" id="dropdown-basic">
//                 Categories
//             </Dropdown.Toggle>

//             <Dropdown.Menu>
//                 <Dropdown.Item>Action</Dropdown.Item>
//                 <Dropdown.Item>Another action</Dropdown.Item>
//                 <Dropdown.Item>Something else</Dropdown.Item>
//             </Dropdown.Menu>
//         </Dropdown>

//         <Dropdown>
//             <Dropdown.Toggle variant="success" id="dropdown-basic">
//                 Price range
//             </Dropdown.Toggle>

//             <Dropdown.Menu>
//                 <Dropdown.Item>Action</Dropdown.Item>
//                 <Dropdown.Item>Another action</Dropdown.Item>
//                 <Dropdown.Item>Something else</Dropdown.Item>
//             </Dropdown.Menu>
//         </Dropdown>

//         <Dropdown>
//             <Dropdown.Toggle variant="success" id="dropdown-basic">
//                 Review
//             </Dropdown.Toggle>

//             <Dropdown.Menu>
//                 <Dropdown.Item>Action</Dropdown.Item>
//                 <Dropdown.Item>Another action</Dropdown.Item>
//                 <Dropdown.Item>Something else</Dropdown.Item>
//             </Dropdown.Menu>
//         </Dropdown>

//       </nav>
//   );
// };
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
                    {this.filter.location.map(data =>(
                    <Dropdown.Item >{data}</Dropdown.Item>
                    ))}
                </DropdownButton>

                <DropdownButton id="dropdown-basic-button" variant ="success" title="Categories">
                    {this.filter.categories.map(data =>(
                    <Dropdown.Item >{data}</Dropdown.Item>
                    ))}
                </DropdownButton>

                <DropdownButton id="dropdown-basic-button" variant ="success" title="Price Range">
                    {this.filter.price.map(data =>(
                    <Dropdown.Item >{data}</Dropdown.Item>
                    ))}
                </DropdownButton>

                <DropdownButton id="dropdown-basic-button" variant ="success" title="Review">
                    {this.filter.review.map(data =>(
                    <Dropdown.Item >{data}</Dropdown.Item>
                    ))}
                </DropdownButton>
            </nav>
        )
    }
}
export default Filter;
