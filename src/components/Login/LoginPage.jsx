import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import "./Login.css"; // Optional: for custom styles
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const history = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate input fields
    if (!username || !password) {
      setError("All fields are required");
      return;
    }

    const baseUrl = "http://localhost:8222/api/auth/login"; // Adjust the URL as needed

    try {
      const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json(); // Parse response as JSON
      console.log(data);
      if (response.ok) {
        const token = data.token; // Access the token from the JSON object
        console.log("Login successful, token:", token);
        // Save the token or use it for further requests
        localStorage.setItem("token", token);
        history("/admin");
      } else {
        throw new Error("Login Failed"); // Handle error messages returned from the backend
      }
    } catch (error) {
      // console.error("Error:", error.message);
      setError(error.message); // Display error in the UI
    }
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
