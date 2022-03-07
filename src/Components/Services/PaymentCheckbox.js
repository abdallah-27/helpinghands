import { Checkbox, FormControl, FormControlLabel } from "@material-ui/core";
import React from "react";

 function PaymentCheckBox(props){

    const { name, label, value, onChange} = props;

    const convertToDefEventPara = (name, value)=>({
        target: {
            name, value
        }
    })
    return(
        <div>
            <FormControl>
                <FormControlLabel
                    control= {<Checkbox
                    name = {name}
                    color= "primary"
                    checked = {value}
                    onChange ={e => onChange(convertToDefEventPara(
                        name,e.target.checked
                    ))}
                    />}
                    label = {label}
                />
            </FormControl>
        </div>
    )
}
export default PaymentCheckBox;