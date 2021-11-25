import React, { useState } from "react";

import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

function RegistrationView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, confirmPassword, email, birthday); //
    //    axios.post('https://myflapix.herokuapp.com/users', {
    //      Username: username,
    //      Password: password,
    //      Email: email,
    //      Birthday: birthday
    //    })
    //    .then(response => {
    //      const data = response.data;
    //      console.log(data);
    //      console.log('registration Successful')
    //      alert('Welcome to myFlix ' + username+ ', go back to sign in')
    //      //window.open('/', '_self'); // the second argument '_self' is necessary so that the page will open in the current tab
    //     })
    //    .catch(e => {
    //      console.log('error registering the user')
    //      alert('Something went wrong! try using another username, change the password or email')
    //    });
  };

  return (
    <Container>
      <Row className="login-view" className="justify-content-md-between">
        <Col></Col>
        <Col sm={8} lg={4}>
          <Form className="login was-validated" noValidate>
            <Form.Group controlId="formUsername">
              <Form.Label
                className="mb-3"
                style={{ color: "white", fontWeight: 700, fontSize: "32px" }}
              >
                Sign Up
              </Form.Label>
              <Form.Control
                required
                type="text"
                maxLength={20}
                minLength={5}
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Form.Control.Feedback type="valid">
                awesome!
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please select a Username!
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formGroupEmail">
              <Form.Control
                required
                type="email"
                placeholder="Enter@your.email"
                pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Control.Feedback type="invalid" className="error form-info">
                Please enter a valid email.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Control
                required
                type="password"
                placeholder="Enter your Password"
                maxLength={50}
                minLength={6}
                value={password}
                name="up"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Control.Feedback type="valid">
                awesome!
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please create a Password, 6 to 50 characters!
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formConfirmPassword">
              <Form.Control
                required
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                name="up2"
                onChange={(e) => setConfirmPassword(e.target.value)}
                // isValid = {confirmPassword === password}
              />
              <Form.Control.Feedback type="valid">
                awesome!
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Confirm your Password!
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBirthday">
              <Form.Control
                required
                type="date"
                min="1900-01-01"
                max={new Date().toISOString().split("T")[0]}
                placeholder="MM/DD/YYYY"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
              />
              <Form.Control.Feedback type="valid">
                awesome!
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Add your Birthday!
              </Form.Control.Feedback>
            </Form.Group>
            <Row className="justify-content-md-between">
              <Button
                variant="danger"
                type="submit"
                style={{ width: "100%" }}
                onClick={handleSubmit}
              >
                Sign Up!
              </Button>
            </Row>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default RegistrationView;
