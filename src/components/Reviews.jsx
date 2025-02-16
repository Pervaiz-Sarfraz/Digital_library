import React from "react";
import prfoile1 from "../assets/profile.jpg";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Reviews() {
  const { t } = useTranslation();

  return (
    <>
      <section className="w-100 px-4 mt-12 mb-6 my-2 py-2">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10 col-xl-8 text-center">
            <h3 className="mb-4">{t("part10")}</h3>
            <hr className="midline" />

            <p className="mb-4 py-2 pb-2 mb-md-5 pb-md-0">{t("part11")} </p>
          </div>
        </div>

        <div className="row text-center d-flex align-items-stretch">
          <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
            <div className="card testimonial-card">
              <div className="card-up"></div>
              <div className="avatar my-2 mx-auto bg-white">
                <img src={prfoile1} className="rounded-circle img-fluid" />
              </div>
              <div className="card-body">
                <h4 className="mb-4">{t("name")}</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <FaQuoteLeft />
                  <span className=" py-2 px-4">{t("review")}</span>
                  <FaQuoteRight />
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
            <div className="card testimonial-card">
              <div className="card-up"></div>
              <div className="avatar my-2 mx-auto bg-white">
                <img src={prfoile1} className="rounded-circle img-fluid" />
              </div>
              <div className="card-body">
                <h4 className="mb-4">{t("name")}</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <FaQuoteLeft />
                  <span className=" py-2 px-4">{t("review")}</span>
                  <FaQuoteRight />
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-0 d-flex align-items-stretch">
            <div className="card testimonial-card">
              <div className="card-up"></div>
              <div className="avatar my-2 mx-auto bg-white">
                <img src={prfoile1} className="rounded-circle img-fluid" />
              </div>
              <div className="card-body">
                <h4 className="mb-4">{t("name")}</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <FaQuoteLeft />
                  <span className=" py-2 px-4">{t("review")}</span>
                  <FaQuoteRight />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Reviews;
