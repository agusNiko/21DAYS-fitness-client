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
      </div>
    );
  }
}

export default MainView;
