import React from "react";
import { Link } from "react-router-dom";
import BookCard from "../components/BookList/BookCard";
import { books } from "./api";

function Noval() {
  const novalBooks = books.filter((book) => book.catagory === "Educational");

  return (
    <div className="noval-container mt-4 mb-2 mx-auto">
      <h1 className="text-center py-4 my-4">Educational Category Books</h1>
      <div className="booklist mt-4 m-auto">
        {novalBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Noval;
