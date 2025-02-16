// Home.jsx
import React, { useState } from "react";
import Booklist from "../components/BookList/Booklist";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { books } from "../components/api";
import Header from "../components/Header";
import Reviews from "../components/Reviews";
import Parralex from "../components/Parralex";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(books);

  const handleSearch = (filteredResults) => {
    setFilteredBooks(filteredResults);
  };

  return (
    <>
      <Hero
        onSearch={handleSearch}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
        books={filteredBooks}
      />
      <Booklist searchQuery={searchQuery} books={filteredBooks} />
      <Reviews />
      <Parralex />
    </>
  );
}

export default Home;
