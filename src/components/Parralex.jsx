import React from "react";
import Card from "react-bootstrap/Card";
import { useTranslation } from "react-i18next";

function Parralex() {
  const { t } = useTranslation();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="parallax1">
        <div className="container parallaxContainer">
          <div className="row">
            <div className="col-sm-12">
              <div className="subscribe_now">
                <h4 className="my-1 p-2 "> {t("part5")} </h4>
                <p className="my-1 p-2">{t("part6")}</p>
                <form className="subscribe_form" onSubmit={handleSubmit}>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control fs-3"
                      name="email"
                      placeholder={t("part3")}
                    />
                    <span className="input-group-btn">
                      <button className="btn btn-default fs-3" type="button">
                        {t("subscribe")}
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Parralex;
