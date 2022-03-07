import React from "react";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

function DateTime(props){

    const{ name, label, value, onChange} = props

    const convertToDefEventPara = (name, value)=>({
        target: {
            name, value
        }
    })
    return (
        <div>
            <MuiPickersUtilsProvider utils ={DateFnsUtils}>
                <KeyboardDatePicker disableToolbar variant="inline"
                inputVariant="outlined"
                    label={label}
                    formate="MM/dd/yyyy"
                    name={name}
                    value={value}
                     onChange ={date => onChange(convertToDefEventPara(
                        name,date
                    ))}
                />
            </MuiPickersUtilsProvider>
        </div>
    )
}

export default DateTime;