import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { asyncWrap } from "../asyncWrap";
import Footer from "./Footer";
import Header from "./Header";

export default function Register() {
  const [farmerName, setFarmerName] = useState("");
  const [farmerMobile, setFarmerMobile] = useState("");
  const [farmerVillage, setFarmerVillage] = useState("");
  const [pincode, setPincode] = useState("");
  const [PreferredRetailer, setPreferredRetailer] = useState("");
  const [landOwnedInAcre, setLandOwnedInAcre] = useState("");
  const [cropName, setCropName] = useState("");
  const [cropArea, setCropArea] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [DhaanyaSeed, setDhaanyaSeed] = useState("");
  const [HybridUse, setHybridUse] = useState("");
  const [EdgeCode, setEdgeCode] = useState("");
  const [ValidationRoute, setValidationRoute] = useState("");
  const [termCondition, setTermCondition] = useState(false);

  let mobile = localStorage.getItem("Verifymob");
  let farmerlanguage = localStorage.getItem("farmerLanguage");
  const mobileValidation = /^[0]?[6789]\d{9}$/;

  const navigate = useNavigate();

  const { t, i18n } = useTranslation();

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

  const HandleRegister = async () => {
    if (farmerName.length <= 3) {
      alert(t('dialog_full_name'));
      return;
    }

    if (!mobileValidation.test(farmerMobile)) {
      alert(t('dialog_valid_number'));
      return;
    }

    if (!farmerVillage) {
      alert(t('dialog_farmer_vill'));
      return;
    }

    if (!pincode) {
      alert(t('dialog_pincode'));
      return;
    }

    if (!PreferredRetailer) {
      alert(t('dialog_preferred_retailer'));
      return;
    }

    if (!landOwnedInAcre) {
      alert(t('dialog_land_owned_in_acre'));
      return;
    }

    if (!cropName) {
      alert(t('dialog_crop_name'));
      return;
    }
    if (!cropArea) {
      alert(t('dialog_cultivate_crop_area'));
      return;
    }
    if (!companyName) {
      alert(t('dialog_company_name'));
      return;
    }
    if (!DhaanyaSeed) {
      alert(t('dialog_dhaanya_seed'));
      return;
    }
    if (DhaanyaSeed === "Y") {
      if (!HybridUse) {
        alert(t('dialog_company_used'));
        return;
      }
    }
    if (!EdgeCode) {
      alert(t('dialog_edge_code'));
      return;
    }
    if (!ValidationRoute) {
      alert(t('dialog_validate_route'));
      return;
    }
    if (!termCondition) {
      alert(t('dialog_term_condition'));
      return;
    }

    if (ValidationRoute === "1") {
      const data = {
        phoneNumber: `+91${mobile}`,
        productId: "938",
        clientId: "283",
        farmerName: farmerName,
        farmerNumber: `+91${farmerMobile}`,
        village: farmerVillage,
        language:
          farmerlanguage === "en"
            ? "1"
            : farmerlanguage === "hi"
              ? "2"
              : farmerlanguage === "mr"
                ? "3"
                : farmerlanguage === "gu"
                  ? "4"
                  : "1",
        retailerName: PreferredRetailer,
        retailerId: "123",
        registeredThrough: ValidationRoute,
        pincode: pincode,
        totalLandArea: landOwnedInAcre,
        cropGrows: cropName,
        cultivatedArea: cropArea,
        generalCompanyBuy: companyName,
        usedSeed: HybridUse,
        isUsedDhanyaSeed: DhaanyaSeed,
        edgeCode: EdgeCode,
      };

      const config = {
        method: "post",
        url: "/registerFarmer",
        data: data,
      };

      const [error, result] = await asyncWrap(axios(config));
      if (!result) {
        console.log(error);
        return;
      }
      if (result.data.status === "FAILURE") {
        alert(t('farmer_already_register'));
        navigate("/register");
      } else if (result.data.status === "SUCCESS") {
        localStorage.setItem("registerMobile", farmerMobile);
        alert(t('register_code_sent'));
        navigate("/registerotp");
      } else {
        alert(result.data.message);
        navigate("/register");
      }
    } else {
      const data = {
        phoneNumber: `+91${mobile}`,
        productId: "938",
        clientId: "283",
        farmerName: farmerName,
        farmerNumber: `+91${farmerMobile}`,
        village: farmerVillage,
        language:
          farmerlanguage === "en"
            ? "1"
            : farmerlanguage === "hi"
              ? "2"
              : farmerlanguage === "mr"
                ? "3"
                : farmerlanguage === "gu"
                  ? "4"
                  : "1",
        retailerName: PreferredRetailer,
        retailerId: "123",
        registeredThrough: ValidationRoute,
        pincode: pincode,
        totalLandArea: landOwnedInAcre,
        cropGrows: cropName,
        cultivatedArea: cropArea,
        generalCompanyBuy: companyName,
        usedSeed: HybridUse,
        isUsedDhanyaSeed: DhaanyaSeed,
        edgeCode: EdgeCode,
      };

      const config = {
        method: "post",
        url: "/registerFarmer",
        data: data,
      };

      const [error, result] = await asyncWrap(axios(config));
      if (!result) {
        console.log(error);
        return;
      }
      if (result.data.status === "FAILURE") {
        alert(t('farmer_already_register'));
        navigate("/register");
      } else if (result.data.status === "SUCCESS") {
        alert(t('ivr_sent'));
        navigate("/placeholderivr");
      } else {
        alert(result.data.message);
        navigate("/register");
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="main-section">
        <div className="content-wrap register-wrap">
          <div className="container-fluid header"></div>

          <div className="block register-content register-form">
            <div className="container">
              <div className="tagline">
                <h1 className="logo-tagline">
                  {" "}
                  <br /> <div className="welcomeTxt"> </div>{" "}
                  <span className="b-text">
                    {t("registration")}
                    <br />
                    <br />
                  </span>
                </h1>
              </div>
              <div className="form-container">
                <div className="form-wrap">
                  <div className="form-inner">
                    <form>
                      <div className="form">
                        <div className="form-group">
                          <label className="input-label">
                            {t("farmer_name")}
                          </label>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder=""
                              value={farmerName}
                              onChange={(e) => setFarmerName(e.target.value)}
                            />
                          </div>
                          <p className="invalid-feedback">
                            {t("invalid_nickname")}
                          </p>
                        </div>

                        <div className="form-group">
                          <label className="input-label">
                            {t("mobile_number")}
                          </label>
                          <div className="input-group">
                            <input
                              type="tel"
                              className="form-control"
                              placeholder=""
                              value={farmerMobile}
                              onChange={(e) => setFarmerMobile(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="input-label">{t("village")}</label>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder=""
                              value={farmerVillage}
                              onChange={(e) => setFarmerVillage(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="input-label">{t("pincode")}</label>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder=""
                              value={pincode}
                              onChange={(e) => setPincode(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="input-label">
                            {t("preferred_retailer")}
                          </label>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder=""
                              value={PreferredRetailer}
                              onChange={(e) =>
                                setPreferredRetailer(e.target.value)
                              }
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="input-label">
                            {t("land_owned_in_acre")}
                          </label>
                          <div className="input-group">
                            <select
                              name="Cotton Acer"
                              value={landOwnedInAcre}
                              onChange={(e) =>
                                setLandOwnedInAcre(e.target.value)
                              }
                              className="form-control"
                              id="ID"
                            >
                              <option value="">*Please select*</option>
                              <option value="1">1</option>
                              <option value="1 to 10">{t("1_to_10")}</option>
                              <option value="More than 10">
                                {t("more_than_10")}
                              </option>
                            </select>
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="input-label">
                            {t("which_crop_he_grows")}
                          </label>
                          <div className="input-group">
                            <select
                              name="Cotton Acer"
                              value={cropName}
                              onChange={(e) => setCropName(e.target.value)}
                              className="form-control"
                              id="ID"
                            >
                              <option value="">*Please select*</option>
                              <option value="Millet">{t("millet")}</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="input-label">
                            {t(
                              "how_much_Area_he_cultivate_the_selected_crop_in_acre"
                            )}
                          </label>
                          <div className="input-group">
                            <select
                              name="Cotton Acer"
                              value={cropArea}
                              onChange={(e) => setCropArea(e.target.value)}
                              className="form-control"
                              id="ID"
                            >
                              <option value="">*Please select*</option>
                              <option value="1">1</option>
                              <option value="1 to 10">{t("1_to_10")}</option>
                              <option value="More than 10">
                                {t("more_than_10")}
                              </option>
                            </select>
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="input-label">
                            {t("which_company_seeds_he_generally_buy")}
                          </label>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder=""
                              value={companyName}
                              onChange={(e) => setCompanyName(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          {" "}
                          <span className="Radiobox"></span>
                          <label className="input-label">
                            {t("use_dhaanya_seed")}
                          </label>
                          <div
                            className="radio"
                            style={{ paddingRight: "20px" }}
                          >
                            <input
                              checked={DhaanyaSeed === "Y"}
                              onChange={(e) => setDhaanyaSeed(e.target.value)}
                              value="Y"
                              id="radio-1"
                              name="radio"
                              type="radio"
                            />
                            <label htmlFor="radio-1" className="radio-label">
                              <span className="check-radio"> {t("yes")}</span>
                            </label>
                          </div>
                          <div className="radio">
                            <input
                              checked={DhaanyaSeed === "N"}
                              onChange={(e) => setDhaanyaSeed(e.target.value)}
                              value="N"
                              id="radio-2"
                              name="radio"
                              type="radio"
                            />
                            <label htmlFor="radio-2" className="radio-label">
                              <span className="check-radio"> {t("no")}</span>
                            </label>
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="input-label">
                            {t("which_company_hybrid_used")}
                          </label>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder=""
                              value={HybridUse}
                              onChange={(e) => setHybridUse(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="input-label">
                            {t("retailer_edge_code")}
                          </label>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder=""
                              value={EdgeCode}
                              onChange={(e) => setEdgeCode(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="input-label">
                            {t("validation_route")}
                          </label>
                          <div className="input-group">
                            <select
                              name="Cotton Acer"
                              value={ValidationRoute}
                              onChange={(e) =>
                                setValidationRoute(e.target.value)
                              }
                              className="form-control"
                              id="ID"
                            >
                              <option value="">*Please select*</option>
                              <option value="1">
                                {t("registration_code")}
                              </option>
                              <option value="2">{t("ivr")}</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-group">
                          {" "}
                          <span className="checkbox">
                            <input
                              checked={termCondition}
                              onChange={() => setTermCondition(!termCondition)}
                              type="checkbox"
                            />
                            <label></label>
                          </span>
                          <span className="check-label privacy-policy">
                            {t("i_agree_to")}{" "}
                            <a
                              onClick={(e) => {
                                e.preventDefault();
                                navigate("/termcondition");
                              }}
                              href="terms-conditions.html"
                            >
                              {t("term_condition")}
                            </a>{" "}
                            {t("of_the_scheme")}
                          </span>{" "}
                        </div>
                      </div>
                      <div className="button-bar full-btn">
                        <div className="button-bar-outer">
                          <div className="col">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                HandleRegister();
                              }}
                              className="btn primary-btn"
                            >
                              {t("submit")}
                            </button>
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
      </div>
      <Footer />
    </div>
  );
}
