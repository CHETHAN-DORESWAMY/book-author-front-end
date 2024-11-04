import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminPage = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center">Admin Dashboard</h2>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Manage Books</Card.Title>
              <Link to="/add-book">
                <Button variant="primary" className="me-2">
                  Add Book
                </Button>
              </Link>
              <Link to="/view-books">
                <Button variant="secondary" className="me-2">
                  View Books
                </Button>
              </Link>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Manage Authors</Card.Title>
              <Link to="/add-author">
                <Button variant="primary" className="me-2">
                  Add Author
                </Button>
              </Link>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Search Books</Card.Title>
              <Link to="/view-book-by-name">
                <Button variant="secondary">View Book by Name</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminPage;
