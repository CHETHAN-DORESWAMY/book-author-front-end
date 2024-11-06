import React, { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

function AddBook() {
  const [authors, setAuthors] = useState([]);
  const [bookData, setBookData] = useState({
    title: "",
    price: "",
    publishedDate: "",
    imageUrl: "",
    authorId: "",
  });
  const authorUrl = "http://localhost:8222/api/author/getauthor";
  const bookUrl = "http://localhost:8222/api/book/addbook";

  // Fetch authors from the endpoint
  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await fetch(authorUrl);
        setAuthors(response.data.data); // assuming response.data.data contains the author list
      } catch (error) {
        console.error("Error fetching authors:", error);
      }
    };
    fetchAuthors();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(bookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookData),
      });
      console.log("Book added successfully:", response.data);
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return (
    <Container className="mt-5">
      <h2>Add New Book</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBookTitle">
          <Form.Label>Book Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter book title"
            name="title"
            value={bookData.title}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBookPrice">
          <Form.Label>Book Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter book price"
            name="price"
            value={bookData.price}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBookPublished">
          <Form.Label>Published Date</Form.Label>
          <Form.Control
            type="date"
            name="publishedDate"
            value={bookData.publishedDate}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBookImageUrl">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter book image URL"
            name="imageUrl"
            value={bookData.imageUrl}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formAuthorId">
          <Form.Label>Author Name</Form.Label>
          <Form.Control
            as="select"
            name="authorId"
            value={bookData.authorId}
            onChange={handleChange}
          >
            <option value="">Select an author</option>
            {authors.map((author) => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Book
        </Button>
      </Form>
    </Container>
  );
}

export default AddBook;
