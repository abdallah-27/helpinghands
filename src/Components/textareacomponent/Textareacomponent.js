import "./Textareacomponent.css"


const Textareacomponent = (props)=>{
    let { placeholder,id, addAddress} = props;
    return(
        <textarea placeholder={placeholder} id={id} onChange = {(e) => addAddress(e)} />
    )
}

export default Textareacomponent;
