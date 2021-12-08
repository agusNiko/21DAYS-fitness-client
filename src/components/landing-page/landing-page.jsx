import { Google, KeyboardArrowDown } from "@mui/icons-material";
import "./landing-page.css";

import React from "react";
import Img from "./img";
import { height } from "@mui/system";
import About from "./about";

const LandingPage = (props) => {
  return (
    <div>
      <div className="landing-page__box">
        <div className="landing-page__top">
          <div className="circle">
            <div className="center-circle"></div>
          </div>
          <div>
            <p>Homeworkouts on your terms</p>
          </div>
        </div>
        <div className="landing-page__middle">
          <Img></Img>
        </div>
        <div className="landing-page__bottom">
          <button onClick={() => props.toLogin()}>Sign In</button>
          <button onClick={() => console.log("connect with google")}>
            <Google className="google-logo" /> Sign in with google
          </button>
          <div onClick={() => props.toRegister()} style={{ cursor: "pointer" }}>
            <p>Are you new? Register here!</p>
          </div>
          <KeyboardArrowDown className="down-arrow__icon"></KeyboardArrowDown>
        </div>
      </div>
      <About></About>
    </div>
  );
};

export default LandingPage;
