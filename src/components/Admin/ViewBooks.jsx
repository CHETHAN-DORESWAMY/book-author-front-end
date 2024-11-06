import React from "react";
import { Container } from "react-bootstrap";

const ViewBooks = () => {
  const [books, setBooks] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [showAuthorModal, setShowAuthorModal] = useState(false);
  const bookUrl = "http://localhost:8222/api/book/getbook";
  const authUrl = "http://localhost:8222/api/author/getauthor";


  // Fetch all books
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(bookUrl);
        const data = await response.json();
        setBooks(data.data); // assuming data.data contains the book list
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);

  // Fetch author details when author name is clicked
  const fetchAuthorDetails = async (authorId) => {
    try {
      const response = await fetch(`${authUrl}/${authorId}`);
      const data = await response.json();
      setSelectedAuthor(data.data); // assuming data.data contains author details
      setShowAuthorModal(true);
    } catch (error) {
      console.error("Error fetching author details:", error);
    }
  };

  return (
    <Container className="mt-5">
      <h2>View All Books</h2>
      <div className="d-flex flex-wrap">
        {books.map((book) => (
          <Card key={book.id} className="m-3" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={book.imageUrl} alt="Book Image" />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>
                <strong>Price:</strong> ${book.price} <br />
                <strong>Published Date:</strong> {book.publishedDate} <br />
                <strong>Author:</strong>{" "}
                <Button
                  variant="link"
                  onClick={() => fetchAuthorDetails(book.authorId)}
                >
                  to see author details
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* Modal for displaying author details */}
      <Modal show={showAuthorModal} onHide={() => setShowAuthorModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Author Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedAuthor ? (
            <>
              <p>
                <strong>Name:</strong> {selectedAuthor.name}
              </p>
              <p>
                <strong>Biography:</strong> {selectedAuthor.biography}
              </p>
              <p>
                <strong>Other Books:</strong>
              </p>
              <ul>
                {selectedAuthor.books &&
                  selectedAuthor.books.map((book) => (
                    <li key={book.id}>{book.title}</li>
                  ))}
              </ul>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAuthorModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ViewBooks;
