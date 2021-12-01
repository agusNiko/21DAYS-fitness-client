import React, { useState } from "react";

function RegistrationView(props) {
  const [inputValues, setInputValue] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  function handleChange(event) {
    let inputName = event.target.name;
    let value = event.target.value;
    setInputValue({ ...inputValues, [inputName]: value });
  }

  return (
    <div>
      <button onClick={() => console.log(inputValues)}>tomate</button>
      <div className="sign-up-form">
        <form id="registrationForm" action="/" method="POST">
          <div className="form-control">
            <input
              placeholder="First Name"
              type="string"
              name="fName"
              id="fName"
              className="inputField"
              required
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-control">
            <input
              placeholder="Last Name"
              type="string"
              id="lName"
              name="lName"
              className="inputField"
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className="form-control">
            <input
              placeholder="email"
              type="email"
              name="email"
              className="inputField"
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className="form-control">
            <input
              placeholder="password"
              type="password"
              name="password"
              className="inputField"
              onChange={(e) => handleChange(e)}
              required
            />
            <span
              name="passwordValidation"
              className="error-message"
              style={{ color: "red" }}
            >
              {" "}
            </span>
          </div>
          <div className="form-control">
            <input
              placeholder="confirm password"
              type="password"
              name="confirmpassword"
              className="inputField"
              required
              onChange={(e) => handleChange(e)}
            />
            <span
              name="matchPassword"
              className="error-message"
              style={{ color: "red" }}
            >
              {" "}
            </span>
          </div>
          <button type="submit" id="submit-button">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationView;
