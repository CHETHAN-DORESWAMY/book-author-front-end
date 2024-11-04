import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Navbar, Nav, Container } from "react-bootstrap"; // Import components from react-bootstrap

const HomePage = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          MyBookApp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/register">
              Sign Up
            </Nav.Link>
            <Nav.Link as={Link} to="/view-books">
              View Books
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HomePage;
