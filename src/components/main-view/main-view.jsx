import React from "react";
import "./Main-view.css";

import Header from "../header/Header";
import RegistrationView from "../registration-view/Registration-view";
import { width } from "@mui/system";

class MainView extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="main-view">
        <RegistrationView />
        <h1 className="">21DAYS fitness APP!</h1>
        <h2>--- Comming soon ---</h2>
      </div>
    );
  }
}

export default MainView;
