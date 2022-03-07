import { Grid, TextField } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import './Services.css';
import {} from "@material-ui/core"

 export function useForm(initialfValues, validateOnChange=false,
    validate){

    const [values, setValues] = useState(initialfValues);
    const [errors, setErrors] = useState({});
    
    const handleInputChange = e=>{
        const{name, value} = e.target
        setValues({
            ...values,
            [name]:value
        })
        if(validateOnChange)
        validate({[name]:value})
    }    

    const resetForm =()=>{
        setValues(initialfValues);
        setErrors({})
    }
     return {
         values,
         setValues,
         errors,
         setErrors,
         resetForm,
         handleInputChange
     }
 }

 export function Form(props){
    const{children, ...other} = props;
    return(
        <form className='root' autoComplete='off' {...other}>
            {props.children}
        </form>
    )
 }