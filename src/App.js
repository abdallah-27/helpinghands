import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from "./Components/Home/Home";
import './App.css'
import 'react-chat-elements/dist/main.css';
// import { ChatItem } from 'react-chat-elements'
import { Popup } from 'react-chat-elements'

function App() {
 const state = () =>{
  state = {
    author: { id: '', firstName: '', lastName: '' }
  };

 }
  return (
    <div className="App"> 
      <Home/>
      <Popup
        show={this.state.show}
        header='Lorem ipsum dolor sit amet.'
        headerButtons={[{
            type: 'transparent',
            color:'black',
            text: 'close',
            onClick: () => {
                this.setState({show: false})
            }
        }]}
        text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem animi veniam voluptas eius!'
        footerButtons={[{
            color:'white',
            backgroundColor:'#ff5e3e',
            text:"Vazgeç",
        },{
            color:'white',
            backgroundColor:'lightgreen',
            text:"Tamam",
        }]}/>
    </div>
  );
}

export default App;
