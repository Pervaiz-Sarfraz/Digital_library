import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Hero({ onSearch, setSearchQuery, searchQuery, books }) {
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredResults = books.filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    onSearch(filteredResults);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <div className="hero mt-2 py-2">
        <div className="hero-content py-4">
          <h2 className="text-center text-white"> {t("part1")}</h2>
          <br />
          <p className="text-center  fs-2 text-white py-2">{t("part2")}</p>
          <div className="search-form d-flex justify-content-center ">
            <div className="container m-auto ">
              <div className="inputbox m-auto">
                <Form onSubmit={handleSubmit}>
                  <div className="flex position-relative bg-white p-3 rounded-5">
                    <FormControl
                      type="text"
                      placeholder={t("part3")}
                      className="search-input border-0 focus-ring-light w-100 fs-4"
                      value={searchQuery}
                      onChange={handleInputChange}
                    />
                    <Button
                      type="submit"
                      className="search-btn bg-transparent border-0"
                    >
                      <FaSearch className="text-purple" size={32} />
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
