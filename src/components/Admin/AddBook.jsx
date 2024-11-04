import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const AddBook = () => {
  return (
    <Container className="mt-5">
      <h2>Add New Book</h2>
      <Form>
        <Form.Group controlId="formBookName">
          <Form.Label>Book Name</Form.Label>
          <Form.Control type="text" placeholder="Enter book name" />
        </Form.Group>
        <Form.Group controlId="formAuthorName">
          <Form.Label>Author Name</Form.Label>
          <Form.Control type="text" placeholder="Enter author name" />
        </Form.Group>
        {/* Add more fields as necessary */}
        <Button variant="primary" type="submit">
          Add Book
        </Button>
      </Form>
    </Container>
  );
};

export default AddBook;
