import React from "react";
import "./Main-view.css";
import RegistrationView from "../registration-view/registration-view";
import LoginView from "../login-view/login-view";
import LandingPage from "../landing-page/landing-page";

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
        <LandingPage />
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
