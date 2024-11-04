import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const ViewBookByName = () => {
  return (
    <Container className="mt-5">
      <h2>View Book by Name</h2>
      <Form>
        <Form.Group controlId="formBookName">
          <Form.Label>Book Name</Form.Label>
          <Form.Control type="text" placeholder="Enter book name" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
    </Container>
  );
};

export default ViewBookByName;
