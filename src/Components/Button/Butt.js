import './Butt.css'

const Butt = (props) =>{
    let {nameofbtn, buttonPress, addressarray }=props
    console.log(`${buttonPress} Buuton`)
return(
<div>
    <button className='bttn' onClick={() => buttonPress()}>{nameofbtn} </button>
</div>)
}

export default Butt;

