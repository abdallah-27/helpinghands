import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { useNavigate } from "react-router-dom";

import UserProfile from "../userProfile/UserProfile";
import './Login.css'

const Login = () => {
  const navigate = useNavigate();

  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const login = () => {
    if (
      (emaillog == "abc" && passwordlog == "123") ||
      (emaillog == "ashwini@gmail.com" && passwordlog == "sarode")
    ) {
      setEmaillog("abc");
      setPasswordlog("password");
     
      navigate("/Home", { state: { data: "loggeduser" } });
    } else if (
      (emaillog == "bcd" && passwordlog == "123") ||
      (emaillog == "pranali" && passwordlog == "shirsat")
    ) {
      setEmaillog("bcd");
      setPasswordlog("123");
      navigate("/Home", { state: { data: "loggeduserNoApp" } });
    }
  };

  return (
    <div>
      <div className="LoginContainer">
        <form id="reg-login">
          <h3
          className="loginHeading"
          style={{ fontSize: "2rem", marginTop: "5rem", textAlign: "center" }}
          >
            Login
          </h3>
          <div >
            <label className="Label2">Email:</label>

            <input
              type="email"
              className="form-control"
              id="username"
              onChange={(e) => {
                setEmaillog(e.target.value);
              }}
              aria-describedby="emailHelp"
            />
          </div>
          <div >
            <label className="Label2">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={(e) => {
                setPasswordlog(e.target.value);
              }}
            />
          </div>
          <div className="buttoncss">
            <button
              type="submit"
              className="btn btn-dark btn-lg"
              onClick={login}
            >
              Submit
            </button>
          </div>
          <br></br>
        </form>
      </div>

      <img src="" />
    </div>
  );
};

export default Login;