import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useDarkMode } from "../../context/context";
import { useTranslation } from "react-i18next";

function BookCard({ book }) {
  const { isLoggedIn } = useAuth();
  const { darkMode } = useDarkMode();
  const { t } = useTranslation();

  const bookLink = isLoggedIn ? `/book/${book.id}` : "/login";

  return (
    <Link to={bookLink}>
      <Card
        className="bookcard"
        style={{
          backgroundColor: darkMode ? "#333" : "",
          color: darkMode ? "#fff" : "#333",
        }}
      >
        <Card.Img variant="top" src={book.image} className="imgcard1" />
        <Card.Body>
          <Card.Title className="bookname fw-bold">{book.title}</Card.Title>
          <Card.Text className="fw-medium">{book.author}</Card.Text>
          <Card.Text className="booktext fw-light">
            {book.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default BookCard;
