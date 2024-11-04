import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import "./Login.css"; // Optional: for custom styles
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const history = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("All fields are required");
      return;
    }

    // Simulate login (replace with your actual authentication logic)
    history("/admin");

    // Simulate successful login and redirect
    // You can implement your actual login logic here.
    // history("/dashboard"); // Uncomment and use if you have a redirect after successful login
  };

  return (
    <Container className="login-container mt-5">
      <Row className="justify-content-md-center">
        <Col md={6} className="shadow p-4 rounded bg-white">
          <h2 className="text-center">Login</h2>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formUsername" className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            {error && <Alert variant="danger">{error}</Alert>}
            {submitted && <Alert variant="success">Login successful!</Alert>}

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Login
            </Button>
          </Form>

          <div className="text-center mt-3">
            Don’t have an account? <a href="/register">Register</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
