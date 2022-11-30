import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Home() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("homeData"));

  // console.log(data)
  let farmerlanguage = localStorage.getItem("farmerLanguage");
  let mobile = localStorage.getItem("loginMob");

  useEffect(() => {
    if (!mobile) {
      alert("Please login first to use this service");
      navigate("/");
      return;
    } else {
      i18n.changeLanguage(farmerlanguage);
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
              <div className="tagline">
                <h1 className="logo-tagline">
                  <div className="welcomeTxt"> </div>
                  <span className="b-text">
                    {t("welcome_to_dhaanya_farmer_campaign")}
                    <br />
                  </span>
                </h1>
              </div>
            </div>
            <div className="col-6 col-md-3 col-sm-6 mb-4">
              <div className="card text-center">
                <div className="card-header bg-orange">
                  {t("overall_target")}
                </div>
                <div className="card-body">
                  <h3>{data ? data.totalTarget : ""}</h3>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3 col-md-3 col-sm-6 mb-4">
              <div className="card text-center">
                <div className="card-header bg-orange">
                  {t("overall_achieved")}
                </div>
                <div className="card-body">
                  <h3>{data ? data.targetAchived : ""}</h3>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 col-sm-6 mb-4">
              <div className="card text-center">
                <div className="card-header bg-orange">{t("day_target")}</div>
                <div className="card-body">
                  <h3>{data ? data.dailyTarget : ""}</h3>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 col-sm-6 mb-4">
              <div className="card text-center">
                <div className="card-header bg-orange">{t("day_achieved")}</div>
                <div className="card-body">
                  <h3>{data ? data.dailyTargetAchieved : ""}</h3>
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
                  navigate("/register");
                }}
                className="btn primary-btn"
              >
                {t("register_farmer")}
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
