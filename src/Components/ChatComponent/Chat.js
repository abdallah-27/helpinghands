import './Chat.css'
import Textareacomponent from '../textareacomponent/Textareacomponent';

import {MdPlayArrow} from "react-icons/md";

const Chat =()=>{
return (<div className='contentchat'>
    <div className='chatscreen_div'>
    <div className='Messageimagediv'>
       
        <img className='phtchat_user' src="https://images.unsplash.com/photo-1622322062536-895d869b09ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="distressed Italian wall in pink and grey hues"></img> 
        <div className="Message_div">
        <p>Hello, How can I help you? </p>
        </div>
    </div>
    </div>

    <div className='type_div'>
    <div className='typinginput'>
        <div className='placeholder_chat'>Start typing...</div>
        <div><MdPlayArrow className='MdPlayArrow_icon'></MdPlayArrow></div>
        </div>
    </div>

    </div>)
}

export default Chat;