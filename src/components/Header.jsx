import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoImg from "../assets/logo.png";
import { useAuth } from "../context/AuthContext";
import { useDarkMode } from "../context/context";
import { useTranslation } from "react-i18next"; // Import useTranslation
import i18n from "../i18n";
const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { isLoggedIn, logout, username } = useAuth();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18n.changeLanguage("en");
    }
  }, []);
  
  const handleLogin = () => {
    if (isLoggedIn) {
      // User is logged in, so logout
      logout();
    } else {
      // User is not logged in, so navigate to the login page
      navigate("/login");
    }
  };
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng.target.value); // Change language using i18next
    console.log(lng);
  };

  return (
    <nav className="navbar">
      <div className="navbar-start-button ">
        <Link to="/">
          <img className="navbar-logo" src={logoImg} alt="Site logo" />
        </Link>
        <div className="navbar-nav">
          <Link to="/" className="nav-link text-uppercase   ls-1 ms-4">
            {t("Home")}
          </Link>
          <Link to="/novel" className="nav-link text-uppercase   ls-1 ms-4">
            {t("Novel")}
          </Link>
          <>
            <Link
              to="/engineering"
              className="nav-link text-uppercase  ls-1 ms-4"
            >
              {t("Engineering")}
            </Link>
            <Link
              to="/Educational"
              className="nav-link text-uppercase  ls-1 ms-4"
            >
              {t("Educational")}
            </Link>
          </>
        </div>
      </div>
      <div className="navbar-end-button">
        <div className="language-dropdown">
          {/* <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuLanguage"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            English (EN)
          </button> */}

          {/* <ul className="dropdown-menu" aria-labelledby="dropdownMenuLanguage">
            <li data-language="en">
              <a className="dropdown-item" href="#">
                {t("navbar.english")}
              </a>
            </li>
            <li data-language="ar">
              <a className="dropdown-item" href="#">
                {t("navbar.arabic")}
              </a>
            </li>
          </ul> */}
          <select
            onChange={changeLanguage}
            value={localStorage.getItem("i18nextLng")}
          >
            <option value="en"> {t("Arabic")}</option>
            <option value="ar">{t("English")} </option>
          </select>
        </div>
        <div className="toggleWrapper">
          <input
            type="checkbox"
            className="dn"
            id="dn"
            label=""
            checked={darkMode}
            onChange={toggleDarkMode}
          />
          <label htmlFor="dn" className="toggle">
            <span className="toggle__handler">
              <span className="crater crater--1"></span>
              <span className="crater crater--2"></span>
              <span className="crater crater--3"></span>
            </span>
            <span className="star star--1"></span>
            <span className="star star--2"></span>
            <span className="star star--3"></span>
            <span className="star star--4"></span>
            <span className="star star--5"></span>
          </label>
        </div>
        <Link to="/login" className="nav-login-btn">
          <button
            type="button"
            className="navbar-toggler d-flex text-white fw-bold bg-dark"
            onClick={handleLogin}
          >
            {isLoggedIn ? `Logout ` : "Login"}
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
