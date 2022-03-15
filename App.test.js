import React from "react";
import App from "./App";
import { MemoryRouter } from 'react-router-dom';
import { mount, render } from "enzyme";
import {shallow} from "enzyme";
import Home from "./Components/Home/Home.js";
import Login from './Components/Login/Login.js'; 
import Listing from "./Components/Listing/Listing.js";
import Details from "./Components/Services/Details.js";
import UserProfile from "./Components/userProfile/UserProfile.js"

describe('My Test Suite', () => {
  it('My Test Case', () => {
    expect(true).toEqual(true);
  });
});

describe("Counter Component State", ()=> {
  let wrapper  = null;
  const component = (path) =>{
    return mount(
      <MemoryRouter initialEntries={[`${path}`]}>
        <App />
      </MemoryRouter>
      );
    };
  beforeEach(() => {
    wrapper = component();
  });

  it('is rendered', () => {
  const app = wrapper.find({"data-testid": "content_home"});
  expect(app.length).toBe(0);
  });

  it("displays Baby-sitting service", () => {
    wrapper = component("/Home");
    const navLinks = wrapper.find("button");
    expect(navLinks.at(4).text()).toBe("Baby Stting");
  });

  it("displays Search option", () => {
    wrapper = component("/Home");
    const navLinks = wrapper.find("button");
    expect(navLinks.at(3).text()).toBe("Search");
    });

  it("displays gardening service", () => {
    wrapper = component("/Home");
    const navLinks = wrapper.find("button");
    expect(navLinks.at(6).text()).toBe("Gardening");
    });

  it("displays plumbing service", () => {
    wrapper = component("/Home");
    const navLinks = wrapper.find("button");
    expect(navLinks.at(8).text()).toBe("Plumbing");
      });

  it("displays tutor service", () => {
    wrapper = component("/Home");
    const navLinks = wrapper.find("button");
    expect(navLinks.at(9).text()).toBe("Tutor");
    });

  it("displays cleaning service", () => {
    wrapper = component("/Home");
    const navLinks = wrapper.find("button");
    expect(navLinks.at(10).text()).toBe("Cleaning");
  });

  it("displays painting service", () => {
    wrapper = component("/Home");
    const navLinks = wrapper.find("button");
    expect(navLinks.at(11).text()).toBe("Painting");
  });
  
  it("displays drivers service", () => {
    wrapper = component("/Home");
    const navLinks = wrapper.find("button");
    expect(navLinks.at(5).text()).toBe("Driving");
  });

  it("displays set location functionality", () => {
    wrapper = component("/Home");
    const navLinks = wrapper.find("button");
    expect(navLinks.at(2).text()).toBe("Location");
  });

  it("displays set date and time functionality", () => {
    wrapper = component("/Home");
    const navLinks = wrapper.find("button");
    expect(navLinks.at(1).text()).toBe("Date and Time");
  });

  it.only("displays set date and time functionality", () => {
    wrapper = component("/Home");
    const navLinks = wrapper.find("button");
    expect(navLinks.at(7).text()).toBe("Date and Time");
  });

  it('WebSite Title', () =>{
    wrapper = component("/Home");
    const h1 = wrapper.find({ "data-testid": "brand_name" });
    expect(h1.text()).toBe("HelpingHands");
   });

   



// it.only('navigates to general details', () => {

// wrapper = component("/Listing");
// wrapper.find("ListingCardComponent").at(1).simulate('click');
// expect(wrapper.find(Details)).toHaveLength(1);
// });



it('renders home correctly', () => {
  wrapper = component("/Home");
  expect(wrapper.find(Home)).toHaveLength(1);
  expect(wrapper.find(Listing)).toHaveLength(0);
  expect(wrapper.find(UserProfile)).toHaveLength(0);
});

it('renders sevices correctly', () => {
  wrapper = component("/Listing");
  expect(wrapper.find(Home)).toHaveLength(0);
  expect(wrapper.find(Listing)).toHaveLength(1);
  expect(wrapper.find(UserProfile)).toHaveLength(0);
});

it('renders user profile correctly', () => {
  wrapper = component("/UserProfile");
  expect(wrapper.find(Home)).toHaveLength(0);
  expect(wrapper.find(Listing)).toHaveLength(0);
  expect(wrapper.find(UserProfile)).toHaveLength(1);
});
});
 


/*
it('displays navlink with correct display name', () => {
  const navLinks = wrapper.find("NavLink");
  expect(navLinks.at(0).text()).toBe("Home");
  expect(navLinks.at(0).text()).toBe("");
  expect(navLinks.at(0).text()).toBe("Products");
});*/
