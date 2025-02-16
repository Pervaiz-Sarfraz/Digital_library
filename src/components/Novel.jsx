import React from "react";
import { useNavigate } from "react-router-dom";
import librarybg from "../assets/library.jpg";
import BookCard from "./BookList/BookCard";
import { books } from "./api";

function Novel() {
  const novelBooks = books.filter((book) => book.catagory === "noval");
  const navigate = useNavigate();

  const handleBookClick = (bookId) => {
    navigate(`/book/${bookId}`);
  };

  return (
    <div className="noval-container mt-4 mb-2 mx-auto">
      <h1 className="text-center py-4 my-4">Novel Category Books</h1>
      <div className="booklist mt-4 m-auto">
        {novelBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Novel;
