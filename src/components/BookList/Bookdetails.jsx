import React from "react";
import { BsDownload } from "react-icons/bs";


const Bookdetails = ({ book }) => {
  if (!book || Object.keys(book).length === 0) {
    return <div>No book details available.</div>;
  }
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = book.pdf;
    link.download = `${book.title}.pdf`;
    link.click();
  };

  return (
    <>
      <div className="book-detail mt-3 p-3 border-2 border-danger">
        <div className="imgcard">
          <img src={book.image} alt={book.title} />
        </div>
        <div className="px-2 py-3">
          <h2 className="fw-bolder">{book.title}</h2>
          <p className="fw-bold">
            <strong>Author:</strong> {book.author}
          </p>
          <p>{book.publishby}</p>
          <p>{book.category}</p>
          <p className="description">{book.description}</p>
        </div>
      </div>
      <hr className="detail-line my-3" />
      <button className="printbook my-4" onClick={handleDownload}>
        Download PDF <BsDownload />
      </button>
    </>
  );
};

export default Bookdetails;
