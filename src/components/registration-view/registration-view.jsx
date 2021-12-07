import React, { useState } from "react";
import "./Registration.css";
import Button from "@mui/material/Button";

import {
  ArrowBackIos,
  ErrorOutlined,
  LockOutlined,
  MailOutlineOutlined,
  PersonOutlined,
} from "@mui/icons-material";

function RegistrationView(props) {
  const [inputValues, setInputValue] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [validation, setValidation] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //handle submit updates
  function handleChange(event) {
    const { name, value } = event.target; //or:  let value = event.target.value; // let name = event.target.name;
    setInputValue({ ...inputValues, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = { ...validation };

    //first Name validation
    if (!inputValues.fName.trim()) {
      errors.fName = "First name is required";
    } else {
      errors.fName = "";
    }
    //last Name validation
    if (!inputValues.lName.trim()) {
      errors.lName = "Last name is required";
    } else {
      errors.lName = "";
    }

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
      errors.password = "Password must be longer than 6 characters";
    } else if (password.length >= 20) {
      errors.password = "Password must shorter than 20 characters";
    } else if (!password.match(cond1)) {
      errors.password = "Password must contain at least one lowercase";
    } else if (!password.match(cond2)) {
      errors.password = "Password must contain at least one capital letter";
    } else if (!password.match(cond3)) {
      errors.password = "Password must contain at least a number";
    } else {
      errors.password = "";
    }

    //matchPassword validation
    if (!inputValues.confirmPassword) {
      errors.confirmPassword = "Password confirmation is required";
    } else if (inputValues.confirmPassword !== inputValues.password) {
      errors.confirmPassword = "Passwords do not match";
    } else {
      errors.confirmPassword = "";
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
          <div className="back-registration" onClick={() => props.toMainView()}>
            <ArrowBackIos className="back-icon" />
            <h1> Register </h1>
          </div>
          <div className="back-registration">
            <p>Let’s create a new account</p>
          </div>

          <div className="form-control">
            <div className="input-field">
              <p className="input-icon">
                <PersonOutlined />
              </p>
              <input
                placeholder="First Name"
                type="string"
                name="fName"
                id="fName"
                className="input-field"
                onChange={(e) => handleChange(e)}
                value={inputValues.fName}
              />
              {validation.fName && (
                <p className="register-error_icon">
                  <ErrorOutlined></ErrorOutlined>
                </p>
              )}
            </div>

            {validation.fName && (
              <p className="register-error_msg">{validation.fName}</p>
            )}
          </div>
          <div className="form-control">
            <div className="input-field">
              <p className="input-icon">
                <PersonOutlined />
              </p>
              <input
                placeholder="Last Name"
                type="string"
                id="lName"
                name="lName"
                className="input-field"
                onChange={(e) => handleChange(e)}
                value={inputValues.lName}
              />
              {validation.lName && (
                <p className="register-error_icon">
                  <ErrorOutlined></ErrorOutlined>
                </p>
              )}
            </div>

            {validation.lName && (
              <p className="register-error_msg">{validation.lName}</p>
            )}
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
          <div className="form-control">
            <div className="input-field">
              <p className="input-icon">
                <LockOutlined />
              </p>
              <input
                placeholder="Confirm password"
                type="password"
                name="confirmPassword"
                className="input-field"
                onChange={(e) => handleChange(e)}
                value={inputValues.confirmPassword}
                required
              />
              {validation.confirmPassword && (
                <p>
                  <ErrorOutlined className="register-error_icon"></ErrorOutlined>
                </p>
              )}
            </div>
            {validation.confirmPassword && (
              <p className="register-error_msg">{validation.confirmPassword}</p>
            )}
          </div>
          <Button variant="contained" type="submit" id="submit-button">
            Register
          </Button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationView;
