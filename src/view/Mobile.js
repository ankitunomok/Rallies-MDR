import axios from "axios";
// import { changeLanguage } from 'i18next';
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { asyncWrap } from "../asyncWrap";
import Footer from "./Footer";
import Header from "./Header";

export default function Mobile() {
  const [mobile, setMobile] = useState("");
  const [language, setLanguage] = useState("en");
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();
  const mobileValidation = /^[0]?[6789]\d{9}$/;

  const SendOtp = async () => {
    if (!mobileValidation.test(mobile)) {
      alert(t('dialog_valid_number'));
      return;
    }

    const data = {
      phoneNumber: `+91${mobile}`,
      role: "MDR",
      resend: "0",
      productId: "999",
      clientId: "289",
    };

    const config = {
      method: "post",
      url: "/sendOTP",
      data: data,
    };

    const [error, result] = await asyncWrap(axios(config));
    if (!result) {
      console.log(error);
      return;
    }
    if (result.data.status === "FAILURE") {
      alert(t('user_is_not_register'));
      navigate("/mobile");
    } else {
      localStorage.setItem("loginMob", mobile);
      localStorage.setItem("farmerLanguage", language);
      navigate("/otp");
    }
  };

  const handleLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
    setLanguage(e.target.value);
  };

  return (
    <div>
      <Header />
      <div className="main-section">
        <div className="content-wrap">
          <div className="content-wrap  register-wrap">
            <div className="container-fluid header">
              <div className="col-6 logoSection">
                <div className="languagedrop">
                  <select
                    value={language}
                    onChange={(e) => handleLanguage(e)}
                    className="form-controlNew"
                    name="language"
                  >
                    <option value="en">English</option>
                    <option value="hi">Hindi</option>
                    <option value="mr">Marathi</option>
                    <option value="gu">Gujarati</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="tagline">
              <h1 className="logo-tagline">
                <br />
                <div className="welcomeTxt"> </div>
                <span className="b-text">
                  {t("login")}
                  <br />
                  <br />
                </span>
              </h1>
            </div>
            <div className="block mobilePageContainer otp-form">
              <div className="form-container">
                <div className="form-wrap">
                  <div className="form-inner">
                    <form>
                      <div className="form">
                        <div className="form-group">
                          <label className="input-label">
                            {t("mobile_no")}
                          </label>
                          <div className="input-group">
                            <input
                              type="tel"
                              className="form-control"
                              onChange={(e) => {
                                e.preventDefault();
                                setMobile(e.target.value);
                              }}
                              placeholder="99999999"
                              value={mobile}
                            />
                          </div>
                        </div>

                        <div className="button-bar full-btn">
                          <div className="button-bar-outer">
                            <div className="col">
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  SendOtp();
                                }}
                                className="btn primary-btn"
                              >
                                {t("get_otp")}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
