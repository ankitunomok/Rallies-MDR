import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Placeholder() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  let farmerlanguage = localStorage.getItem("farmerLanguage");
  let mobile = localStorage.getItem("Verifymob");

  useEffect(() => {
    i18n.changeLanguage(farmerlanguage ? farmerlanguage : "en");
    if (!mobile) {
      alert(t("dialog_check_login"));
      navigate("/mobile");
      return;
    } else {
      i18n.changeLanguage(farmerlanguage ? farmerlanguage : "en");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Header />
      <div className="main-section">
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-md-12 mt-5 mb-5">
              <div className="tagline"></div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-12">
              <div className="d-flex justify-content-center mb-4">
                <div className="card">
                  <div className="card-body">
                    <h2>{t("farmer_registered_successful")}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-3 mb-5">
          <div className="row">
            <div className="col-md-12 text-center">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/home");
                }}
                className="button"
              >
                {t("home_page")}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
