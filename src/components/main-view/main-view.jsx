import React from "react";

import Header from "../header/Header";
import RegistrationView from "../registration-view/Registration-view";

class MainView extends React.Component {
  constructor() {
    super();
    this.state = { color: "red" };
  }

  render() {
    return (
      <>
        <RegistrationView />
        <h1>21DAYS fitness APP!</h1>
        <h2>--- Comming soon ---</h2>
      </>
    );
  }
}

export default MainView;
