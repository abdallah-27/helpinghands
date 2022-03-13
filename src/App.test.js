import React from "react";
import App from "./App";
import { MemoryRouter } from 'react-router-dom';
import { mount } from "enzyme";
import {shallow} from "enzyme"
import Home from "./Components/Home/Home.js"
import Login from './Components/Login/Login.js' 

describe("Counter Component State", ()=> {
  let wrapper  = null;
  
  beforeEach(()=>{
    wrapper = shallow(<App/>)
  });
  // it('WebSite Title', () =>{
  //   let h1 = wrapper.find("h1").text();
  //   expect(h1).toBe("HelpingHands");
  // });
  
   
  });


  describe('Login check', () => {
    let wrapper = null;
    beforeEach(()=>{
      wrapper = shallow(<Login/>);
    });

  it('login username check', ()=>{
    let usernameinput = wrapper.find("input").get(0).props.value
    expect(username).toBe("abc"); 
  });
});