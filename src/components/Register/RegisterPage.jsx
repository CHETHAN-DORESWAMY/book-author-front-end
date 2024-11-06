import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Register.css"; // Import your custom styles

function Register() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const history = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username || !password || !repeatPassword) {
      setError("All fields are required");
    } else if (password !== repeatPassword) {
      setError("Passwords do not match");
    } else {
      setError(""); // Clear any previous errors
      const apiUrl = "http://localhost:8222/api/auth/register"; // Change to your API endpoint

      try {
        const response = fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });

        // if (!response.ok) {
        //   const errorData = await response.json();
        //   throw new Error("Registration failed");
        // }

        setSubmitted(true);
        // Redirect to login page after successful registration
        console.log("user created successfully");
        history("/login");

        // Change to your login page route
      } catch (err) {
        setError(err.message);
      }
    }
  };

  return (
    <Container className="mt-10 register-container">
      <h2 className="text-center">Register</h2>
      <Row className="justify-content-md-center">
        <Col md={6} className="shadow p-4 rounded bg-white">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the user name"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <div className="input-group mb-3">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Button
                  variant="outline-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </div>
            </Form.Group>

            <Form.Group controlId="repeatPassword">
              <Form.Label>Repeat Password</Form.Label>
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Repeat Password"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                required
              />
            </Form.Group>

            {error && (
              <Alert variant="danger" className="mt-3">
                {error}
              </Alert>
            )}
            {submitted && (
              <Alert variant="success" className="mt-3">
                Registration successful!
              </Alert>
            )}

            <Button type="submit" variant="primary" className="mt-3 w-100">
              Register
            </Button>
            <p className="mt-3 text-center">
              Already have an account? <a href="/login">Login here</a>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
