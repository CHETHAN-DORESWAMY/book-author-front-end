import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const AddAuthor = () => {
  return (
    <Container className="mt-5">
      <h2>Add New Author</h2>
      <Form>
        <Form.Group controlId="formAuthorName">
          <Form.Label>Author Name</Form.Label>
          <Form.Control type="text" placeholder="Enter author name" />
        </Form.Group>
        {/* Add more fields as necessary */}
        <Button variant="primary" type="submit">
          Add Author
        </Button>
      </Form>
    </Container>
  );
};

export default AddAuthor;
