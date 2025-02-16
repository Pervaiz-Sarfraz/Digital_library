import {
  MDBCol,
  MDBContainer,
  MDBFooter,
  MDBRow
} from "mdb-react-ui-kit";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaGithub, FaHome, FaInstagramSquare, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";
import { MdPrint } from "react-icons/md";
import { Link } from "react-router-dom";

import logoImg from "../assets/logo.png";
import { useDarkMode } from "../context/context";
function Footer() {
  const { darkMode } = useDarkMode();
  const { t } = useTranslation();

  return (
    <>
      <MDBFooter
        className={`Footer-container text-center text-lg-start text-muted mb-0 ${
          darkMode ? "dark-mode" : "light-mode"
        } footer`}
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span> {t("part8")}:</span>
          </div>

          <div className="me-icon">
            <a href="" className="me-4 text-reset">
              <FaFacebook />
            </a>
            <a href="" className="me-4 text-reset">
              <FaTwitter />
            </a>
            <a href="" className="me-4 text-reset">
              <FaInstagramSquare />
            </a>
            <a href="" className="me-4 text-reset">
              <FaLinkedin />
            </a>
            <a href="" className="me-4 text-reset">
              <FaGithub />
            </a>
          </div>
        </section>

        <section>
          <MDBContainer className="d-flex text-center text-md-start mt-5">
            <MDBRow className="Footer-content d-flex justify-content-between mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <img
                  className="Footer-logo text-center"
                  src={logoImg}
                  alt="site logo"
                />
                <h6 className="text-uppercase fw-bold mb-4">{t("logotxt")}</h6>
                <p>{t("abouttext")}</p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  {t("Useful links")}
                </h6>
                <p>
                  <Link to="/" className="text-reset">
                    {t("Home")}
                  </Link>
                </p>
                <p>
                  <Link to="/novel" className="text-reset">
                    {t("Novel")}
                  </Link>
                </p>
                <p>
                  <Link to="/engineering" className="text-reset">
                    {t("Engineering")}
                  </Link>
                </p>
                <p>
                  <Link to="/educational" className="text-reset">
                    {t("Educational")}
                  </Link>
                </p>
              </MDBCol>

              <MDBCol
                md="4"
                lg="3"
                xl="3"
                className="Contact-us mx-auto mb-md-0 mb-4"
              >
                <h6 className="text-uppercase fw-bold mb-4">{t("Contact")}</h6>
                <p>
                  <FaHome className="me-3" />
                  {t("address")}
                </p>
                <p>
                  <FaPhone className="me-3" /> + 01 234 567 88
                </p>
                <p>
                  <MdPrint className="me-3" /> + 01 234 567 89
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            Maxium Techno
          </a>
        </div>
      </MDBFooter>
    </>
  );
}

export default Footer;
