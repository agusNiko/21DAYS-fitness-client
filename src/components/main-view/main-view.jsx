import React from "react";
import "./Main-view.css";

import Header from "../header/Header";
import RegistrationView from "../registration-view/Registration-view";
import LoginView from "../login-view/Login-view";

class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      registerView: false,
      logInView: false,
    };
  }

  //toggle state.logInView to go to login
  goToLogin = () => {
    this.setState({ logInView: !this.state.logInView });
  };

  //toggle state.registerView to go to register
  goToRegister = () => {
    this.setState({ registerView: !this.state.registerView });
  };

  render() {
    return (
      <div className="main-view">
        {!this.state.logInView && (
          <button onClick={() => this.goToLogin()}>sign In</button>
        )}
        {!this.state.registerView && (
          <button onClick={() => this.goToRegister()}>register</button>
        )}
        {this.state.registerView && (
          <RegistrationView toMainView={this.goToRegister} />
        )}
        {this.state.logInView && <LoginView toLogin={this.goToLogin} />}
      </div>
    );
  }
}

export default MainView;
