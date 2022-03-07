import { Paper } from '@material-ui/core';
import react from 'react';
import PaymentForm from './PaymentForm';
import './Services.css';
 function Payment(){
     return (
         <div>
             <Paper className='pageContent'>

             <PaymentForm/>
             </Paper>
         </div>
     )
 }

 export default Payment;