import React, { useState } from "react";
import "./Registration.css";
import Button from "@mui/material/Button";

import {
  ArrowBackIos,
  Error,
  ErrorOutlined,
  FmdBad,
} from "@mui/icons-material";

function RegistrationView() {
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
      <ArrowBackIos />
      <h1> Register </h1>
      <div className="sign-up-form">
        <form
          id="registrationForm"
          action="/"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="form-control">
            <div className="input-field">
              <input
                placeholder="First Name"
                type="string"
                name="fName"
                id="fName"
                className="input-field"
                onChange={(e) => handleChange(e)}
                value={inputValues.fName}
              />
              <p>
                <ErrorOutlined></ErrorOutlined>
              </p>
            </div>

            {validation.fName && (
              <p className="register-error_msg">{validation.fName}</p>
            )}
          </div>
          <div className="form-control">
            <div className="input-field">
              <input
                placeholder="Last Name"
                type="string"
                id="lName"
                name="lName"
                className="input-field"
                onChange={(e) => handleChange(e)}
                value={inputValues.lName}
              />
              <p>
                <ErrorOutlined></ErrorOutlined>
              </p>
            </div>

            {validation.lName && (
              <p className="register-error_msg">{validation.lName}</p>
            )}
          </div>
          <div className="form-control">
            <div className="input-field">
              <input
                placeholder="email"
                type="email"
                name="email"
                className="input-field"
                onChange={(e) => handleChange(e)}
                value={inputValues.email}
              />
              <p>
                <ErrorOutlined></ErrorOutlined>
              </p>
            </div>
          </div>
          {validation.email && (
            <p className="register-error_msg">{validation.email}</p>
          )}
          <div className="form-control">
            <div className="input-field">
              <input
                placeholder="password"
                type="password"
                name="password"
                className="input-field"
                onChange={(e) => handleChange(e)}
                value={inputValues.password}
                required
              />
              <p>
                <ErrorOutlined></ErrorOutlined>
              </p>
            </div>
            {validation.password && (
              <p className="register-error_msg">{validation.password}</p>
            )}
          </div>
          <div className="form-control">
            <div className="input-field">
              <input
                placeholder="confirm password"
                type="password"
                name="confirmPassword"
                className="input-field"
                onChange={(e) => handleChange(e)}
                value={inputValues.confirmPassword}
                required
              />
              <p>
                <ErrorOutlined></ErrorOutlined>
              </p>
            </div>
            {validation.confirmPassword && (
              <p className="register-error_msg">{validation.confirmPassword}</p>
            )}
          </div>
          <Button variant="contained" type="submit" id="submit-button">
            submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationView;
