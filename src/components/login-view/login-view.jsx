import React, { useState } from "react";
import "../registration-view/Registration.css";
import Button from "@mui/material/Button";

import {
  ArrowBackIos,
  ErrorOutlined,
  LockOutlined,
  MailOutlineOutlined,
} from "@mui/icons-material";

function LoginView(props) {
  const [inputValues, setInputValue] = useState({
    email: "",
    password: "",
  });

  const [validation, setValidation] = useState({
    email: "",
    password: "",
  });

  //handle submit updates
  function handleChange(event) {
    const { name, value } = event.target; //or:  let value = event.target.value; // let name = event.target.name;
    setInputValue({ ...inputValues, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = { ...validation };

    // email validation
    const emailCond = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!inputValues.email.trim()) {
      errors.email = "Email is required";
    } else if (!inputValues.email.match(emailCond)) {
      errors.email = "Please ingress a valid email address";
    } else {
      errors.email = "";
    }

    //password validation
    const cond1 = /^(?=.*[a-z]).{6,20}$/;
    const cond2 = /^(?=.*[A-Z]).{6,20}$/;
    const cond3 = /^(?=.*[0-9]).{6,20}$/;
    const password = inputValues.password;
    if (!password) {
      errors.password = "password is required";
    } else if (password.length < 6) {
      errors.password = "Incorrect password";
    } else if (password.length >= 20) {
      errors.password = "Incorrect password";
    } else if (!password.match(cond1)) {
      errors.password = "Incorrect password";
    } else if (!password.match(cond2)) {
      errors.password = "Incorrect password";
    } else if (!password.match(cond3)) {
      errors.password = "Incorrect password";
    } else {
      errors.password = "";
    }

    return setValidation(errors);
  };

  return (
    <div className="registration-view">
      <div className="sign-up-form">
        <form
          id="registrationForm"
          action="/"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="back-registration" onClick={() => props.toLogin()}>
            <ArrowBackIos className="back-icon" />
            <h1> Singing In </h1>
          </div>
          <div className="back-registration">
            <p>Welcome back!</p>
          </div>

          <div className="form-control">
            <div className="input-field">
              <p className="input-icon">
                <MailOutlineOutlined />
              </p>
              <input
                placeholder="Email"
                type="email"
                name="email"
                className="input-field"
                onChange={(e) => handleChange(e)}
                value={inputValues.email}
              />
              {validation.email && (
                <p className="register-error_icon">
                  <ErrorOutlined></ErrorOutlined>
                </p>
              )}
            </div>
            {validation.email && (
              <p className="register-error_msg">{validation.email}</p>
            )}
          </div>

          <div className="form-control">
            <div className="input-field">
              <p className="input-icon">
                <LockOutlined />
              </p>
              <input
                placeholder="Password"
                type="password"
                name="password"
                className="input-field"
                onChange={(e) => handleChange(e)}
                value={inputValues.password}
                required
              />
              {validation.password && (
                <p className="register-error_icon">
                  <ErrorOutlined></ErrorOutlined>
                </p>
              )}
            </div>
            {validation.password && (
              <p className="register-error_msg">{validation.password}</p>
            )}
          </div>
          <div className="recover-password" onClick={() => console.log("hola")}>
            <p> Forgot your password? </p>
          </div>
          <Button variant="contained" type="submit" id="submit-button">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}

export default LoginView;
