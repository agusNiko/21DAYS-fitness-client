import React from "react";
import "./landing-page.css";
import ImgAbout1 from "./img-about1";
import ImgAbout2 from "./img-about2";
import ImgAbout3 from "./img-about3";
import faceOne from "./BigEegLjT.png";

const About = () => {
  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <h1 className="about-title"> 21 Days </h1>
      <div className="triangle"></div>
      <div className="about-body">
        <div className="app-description">
          <div className="app-feature">
            <div className="feature-img">
              <ImgAbout1 />
            </div>
            <div className="feature-description">
              <p>Workout at home without equipment</p>
            </div>
          </div>
          <div className="app-feature">
            <div className="feature-img">
              <ImgAbout2 />
            </div>
            <div className="feature-description">
              <p>Workout at your pace to fit around your schedule</p>
            </div>
          </div>
          <div className="app-feature">
            <div className="feature-img">
              <ImgAbout3 />
            </div>
            <div className="feature-description">
              <p>Progress tracker to keep you motivated</p>
            </div>
          </div>
          <div className="created-by">
            <h1> Created by</h1>
            <div className="Created-by__faces">
              <div className="creators">
                <img
                  alt="creator's faces"
                  src={faceOne}
                  style={{ width: "40px", height: "40px" }}
                />
                <p>UX/UI</p>
              </div>
              <div className="creators">
                <img
                  alt="creator's faces"
                  src={faceOne}
                  style={{ width: "40px", height: "40px" }}
                />
                <p>Dev</p>
              </div>
              <div className="creators">
                <img
                  alt="creator's faces"
                  src={faceOne}
                  style={{ width: "40px", height: "40px" }}
                />
                <p>Dev</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
