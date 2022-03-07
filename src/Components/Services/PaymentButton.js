import React from "react";
import { Button } from "@material-ui/core";

function PaymentButton(props){

    const{ text, size, color, variant, onClick,  ...other} = props

   
    return (
       
            <Button
                variant ={variant || "contained"}
                size={size || "large"}
                color={color || "primary"}
                onClick={onClick}>
                {text}
            </Button>
       
    )
}

export default PaymentButton;