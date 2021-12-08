import React from "react";
import "./Main-view.css";
import RegistrationView from "../registration-view/registration-view";
import LoginView from "../login-view/login-view";
import LandingPage from "../landing-page/landing-page";
import Header from "../header/Header";

class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      registerView: false,
      logInView: false,
      user: "",
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
        <Header />
        {!this.state.registerView &&
        !this.state.logInView &&
        !this.state.user ? (
          <LandingPage
            toLogin={this.goToLogin}
            toRegister={this.goToRegister}
          />
        ) : null}
        {this.state.registerView && (
          <RegistrationView toMainView={this.goToRegister} />
        )}
        {this.state.logInView && <LoginView toLogin={this.goToLogin} />}
      </div>
    );
  }
}

export default MainView;
