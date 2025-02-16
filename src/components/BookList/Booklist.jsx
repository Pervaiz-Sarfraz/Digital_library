import React, { useState } from "react";
import BookCard from "./BookCard";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Booklist = (props) => {
  const { searchQuery, books } = props;
  const [selectedBook, setSelectedBook] = useState(null);
  const [displayedBooks, setDisplayedBooks] = useState(6);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleBookClick = (bookId) => {
    navigate(`/book/${bookId}`);
    console.log(bookId);
  };

  const handleClearSelection = () => {
    setSelectedBook(null);
  };

  const handleLoadMore = () => {
    setDisplayedBooks((prevDisplayedBooks) => prevDisplayedBooks + 4);
  };

  const filteredBooks = books.filter((book) => {
    const bookTitle =
      book.title && typeof book.title === "string"
        ? book.title.toLowerCase()
        : "";
    const query =
      searchQuery && typeof searchQuery === "string"
        ? searchQuery.toLowerCase()
        : "";

    return bookTitle.includes(query);
  });

  const visibleBooks = filteredBooks.slice(0, displayedBooks);

  return (
    <div className="booklist-container py-3 border-2 border-danger">
      <>
        <h1 className="py-3 my-4">{t("part3")}</h1>
        <div className="booklist">
          {visibleBooks.map((data, index) => (
            <BookCard book={data} key={index} />
          ))}
        </div>
        {displayedBooks < filteredBooks.length && (
          <button
            onClick={handleLoadMore}
            className="load-more-button py-2 px-4  rounded-5  border-0"
          >
            {t(" Load More")}
          </button>
        )}
      </>
    </div>
  );
};

export default Booklist;
