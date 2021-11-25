import React from "react";

import RegistrationView from "../registration-view/registration-view";
import LoginView from "../login-view/login-view";

class MainView extends React.Component {
  constructor() {
    super();
    this.state = { color: "red" };
  }
  render() {
    return (
      <>
        <h1>21DAYS fitness APP!</h1>
        <h2>--- Comming soon ---</h2>
      </>
    );
  }
}

export default MainView;
