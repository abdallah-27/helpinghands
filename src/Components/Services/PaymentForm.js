import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import InputForm from './InputForm';
import RadioGroupService from './RadioGroupService';
import SelectServices from './SelectServices';
import './Services.css';
import {useForm, Form} from './useForm';
import * as customerService from './customerService'
import PaymentCheckBox from './PaymentCheckbox';
import DateTime from './DateTime';
import PaymentButton from './PaymentButton';

const genderItems = [
    {id: 'paypal', title: 'Paypal'},
    {id: 'cash', title: 'Cash'},
    {id: 'credit', title: 'Credit Card'},
]

const initialfValues = {
    id:0,
    fullName: '',
    mobile: '',
    email: '',
    city: '',
    gender: 'paypal',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false,
}
  function PaymentForm(){
    const validate = (fieldValues = values) => {
    let temp = {...errors}
    if('fullName' in fieldValues)
        temp.fullName = fieldValues.fullName ?"":"This field is required"
    if('email' in fieldValues)
        temp.email = (/$ˆ|.+@.+..+/).test(fieldValues.email)?"":"Email is not valid"
    if('mobile' in fieldValues)
        temp.mobile = fieldValues.mobile.length>9?"":"This field is required"
    if('departmentId' in fieldValues)
        temp.departmentId = fieldValues.departmentId.length !=0 ?"" : "This field is required"
    setErrors({
        ...temp
    })
    if(fieldValues == values)
    return Object.values(temp).every(x => x == "") // boolean if form is valid or not
}

    const {
        values,
        setValues,
        handleInputChange,
        errors,
        setErrors,
        resetForm
    } = useForm(initialfValues,true, validate);
    
    const handleSubmit = e => {
        e.preventDefault()
        if(validate())
        window.alert("testing")
    }

     return (
        <div className ="content">
            <Form onSubmit={handleSubmit}>
                <Grid container>
                    <Grid item xs ={6}>
                        <InputForm
                        name ="fullName" 
                        label="Full Name"
                        value = {values.fullName}
                        onChange = {handleInputChange}
                        error = {errors.fullName}
                        />
                        <InputForm
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange = {handleInputChange}
                        error = {errors.email}
                        />
                        <InputForm
                        label="Mobile"
                        name="mobile"
                        value={values.mobile}
                        onChange = {handleInputChange}
                        error = {errors.mobile}
                        />
                        <InputForm
                        label="City"
                        name="city"
                        value={values.city}
                        onChange = {handleInputChange}
                        />
                    </Grid>
                    <Grid item xs ={6}>
                        <RadioGroupService
                        name='gender'
                        label = "Card type"
                        value={values.gender}
                        onChange={handleInputChange}
                        items= {genderItems}
                        />
                        <SelectServices
                        name='departmentId'
                        label = "Country"
                        value={values.departmentId}
                        onChange={handleInputChange}
                        options ={customerService.getServiceCollection()}
                        error = {errors.departmentId}
                        /> 
                        <DateTime
                        name ="hireDate"
                        label= "Expire date"
                        value ={values.hireDate}
                        onChange = {handleInputChange}
                        />
                        <PaymentCheckBox
                        name ="isPermanent"
                        label= "Expire date"
                        value ={values.isPermanent}
                        onChange = {handleInputChange}
                        />
                        <div>
                            <PaymentButton
                            type ="submit"
                            text="Pay now"
                            />
                            {/* <PaymentButton
                            type ={resetForm}
                            color="default"
                            /> */}
                        </div>
                    </Grid>
                </Grid>
            </Form>
        </div>
     )
 }

 export default PaymentForm;