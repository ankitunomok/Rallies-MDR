import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { asyncWrap } from '../asyncWrap';
import Footer from './Footer'
import Header from './Header'

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

  let mobile = localStorage.getItem("loginMob");
  let farmerlanguage = localStorage.getItem("farmerLanguage");
  const mobileValidation = /^[0]?[6789]\d{9}$/;

  const navigate = useNavigate();

  const { t, i18n } = useTranslation();

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

  const HandleRegister = async () => {

    if (farmerName.length <= 3) {
      alert("Please input your full name");
      return;
    }

    if (!mobileValidation.test(farmerMobile)) {
      alert("Please input a valid mobile number!");
      return;
    }

    if (!farmerVillage) {
      alert("Please input a Farmer Village!");
      return;
    }

    if (!pincode) {
      alert("Please input a Pincode!");
      return;
    }

    if (!PreferredRetailer) {
      alert("Please input a PREFERRED RETAILER!");
      return;
    }

    if (!landOwnedInAcre) {
      alert("Please input a LAND OWNED IN ACRE!");
      return;
    }

    if (!cropName) {
      alert("Please input a Crop Name!");
      return;
    }
    if (!cropArea) {
      alert("Please select AREA HE CULTIVATE THE SELECTED CROP IN ACRE!");
      return;
    }
    if (!companyName) {
      alert("Please input a Company name!");
      return;
    }
    if (!DhaanyaSeed) {
      alert("Please Select Dhaanya seed!");
      return;
    }
    if (!HybridUse) {
      alert("Please input a COMPANY/HYBRID USED!");
      return;
    }
    if (!EdgeCode) {
      alert("Please select RETAILER EDGE CODE!");
      return;
    }
    if (!ValidationRoute) {
      alert("Please select VALIDATION ROUTE");
      return;
    }
    if (!termCondition) {
      alert("Please Check Term & Condition!");
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
        language: farmerlanguage ? farmerlanguage : "1",
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
        edgeCode: EdgeCode
      }

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
      if (result.data.code === 0) {
        alert(result.data.message);
        navigate("/register");
      } else {
        localStorage.setItem("registerMobile", farmerMobile);
        const data = {
          phoneNumber: `+91${farmerMobile}`,
          role: "MDR",
          resend: "0",
          productId: "938",
          clientId: "283",
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
        if (result.data.code === 0) {
          alert(result.data.message);
          navigate("/register");
          return;
        }
        alert(result.data.message);
        navigate("/registerotp");
      }
    } else {
      const data = {
        phoneNumber: `+91${mobile}`,
        productId: "938",
        clientId: "283",
        farmerName: farmerName,
        farmerNumber: `+91${farmerMobile}`,
        village: farmerVillage,
        language: farmerlanguage ? farmerlanguage : "1",
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
        edgeCode: EdgeCode
      }

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
      if (result.data.code === 0) {
        alert(result.data.message);
        navigate("/register");
      } else {
        alert(result.data.message);
        navigate("/placeholderivr");
      }
    }
  }

  return (
    <div>
      <Header />
      <div className="main-section">
        <div className="content-wrap register-wrap">
          <div className="container-fluid header">

          </div>


          <div className="block register-content register-form">
            <div className="container">

              <div className="tagline">
                <h1 className="logo-tagline"> <br /> <div className="welcomeTxt"> </div> <span className="b-text">{t('registration')}<br />
                  <br /></span></h1>
              </div>
              <div className="form-container">
                <div className="form-wrap">
                  <div className="form-inner">
                    <form>

                      <div className="form">

                        <div className="form-group">
                          <label className="input-label">{t('farmer_name')}</label>
                          <div className="input-group">
                            <input type="text" className="form-control" placeholder="" value={farmerName} onChange={(e) => setFarmerName(e.target.value)} />
                          </div>
                          <p className="invalid-feedback">{t('invalid_nickname')}</p>
                        </div>

                        <div className="form-group">
                          <label className="input-label">{t('mobile_number')}</label>
                          <div className="input-group">
                            <input type="tel" className="form-control" placeholder="" value={farmerMobile} onChange={(e) => setFarmerMobile(e.target.value)} />
                          </div>
                        </div>


                        <div className="form-group">
                          <label className="input-label">{t('village')}</label>
                          <div className="input-group">
                            <input type="text" className="form-control" placeholder="" value={farmerVillage} onChange={(e) => setFarmerVillage(e.target.value)} />
                          </div>
                        </div>


                        <div className="form-group">
                          <label className="input-label">{t('pincode')}</label>
                          <div className="input-group">
                            <input type="text" className="form-control" placeholder="" value={pincode} onChange={(e) => setPincode(e.target.value)} />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="input-label">{t('preferred_retailer')}</label>
                          <div className="input-group">
                            <input type="text" className="form-control" placeholder="" value={PreferredRetailer} onChange={(e) => setPreferredRetailer(e.target.value)} />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="input-label">{t('land_owned_in_acre')}</label>
                          <div className="input-group">
                            <select name="Cotton Acer" value={landOwnedInAcre} onChange={(e) => setLandOwnedInAcre(e.target.value)} className="form-control" id="ID">
                              <option value="">*Please select*</option>
                              <option value="1">1</option>
                              <option value="1 to 10">{t('1_to_10')}</option>
                              <option value="More than 10">{t('more_than_10')}</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="input-label">{t('which_crop_he_grows')}</label>
                          <div className="input-group">
                            <select name="Cotton Acer" value={cropName} onChange={(e) => setCropName(e.target.value)} className="form-control" id="ID">
                              <option value="">*Please select*</option>
                              <option value="Millet">{t('millet')}</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="input-label">{t('how_much_Area_he_cultivate_the_selected_crop_in_acre')}</label>
                          <div className="input-group">
                            <select name="Cotton Acer" value={cropArea} onChange={(e) => setCropArea(e.target.value)} className="form-control" id="ID">
                              <option value="">*Please select*</option>
                              <option value="1">1</option>
                              <option value="1 to 10">{t('1_to_10')}</option>
                              <option value="More than 10">{t('more_than_10')}</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="input-label">{t('which_company_seeds_he_generally_buy')}</label>
                          <div className="input-group">
                            <input type="text" className="form-control" placeholder="" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                          </div>
                        </div>




                        <div className="form-group"> <span className="Radiobox"></span>
                          <label className="input-label">{t('use_dhaanya_seed')}</label>
                          <div className="radio" style={{ paddingRight: "20px" }}>
                            <input checked={DhaanyaSeed === "Y"} onChange={(e) => setDhaanyaSeed(e.target.value)} value="Y" id="radio-1" name="radio" type="radio" />
                            <label htmlFor="radio-1" className="radio-label">
                              <span className="check-radio"> {t('yes')}</span>
                            </label>
                          </div>
                          <div className="radio">
                            <input checked={DhaanyaSeed === "N"} onChange={(e) => setDhaanyaSeed(e.target.value)} value="N" id="radio-2" name="radio" type="radio" />
                            <label htmlFor="radio-2" className="radio-label">
                              <span className="check-radio"> {t('no')}</span>
                            </label>
                          </div>
                        </div>


                        <div className="form-group">
                          <label className="input-label">{t('which_company_hybrid_used')}</label>
                          <div className="input-group">
                            <input type="text" className="form-control" placeholder="" value={HybridUse} onChange={(e) => setHybridUse(e.target.value)} />
                          </div>
                        </div>


                        <div className="form-group">
                          <label className="input-label">{t('retailer_edge_code')}</label>
                          <div className="input-group">
                            <input type="text" className="form-control" placeholder="" value={EdgeCode} onChange={(e) => setEdgeCode(e.target.value)} />
                          </div>
                        </div>


                        <div className="form-group">
                          <label className="input-label">{t('validation_route')}</label>
                          <div className="input-group">
                            <select name="Cotton Acer" value={ValidationRoute} onChange={(e) => setValidationRoute(e.target.value)} className="form-control" id="ID">
                              <option value="">*Please select*</option>
                              <option value="1">{t('registration_code')}</option>
                              <option value="2">{t('ivr')}</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-group"> <span className="checkbox">
                          <input checked={termCondition} onChange={() => setTermCondition(!termCondition)} type="checkbox" />
                          <label></label></span>
                          <span className="check-label privacy-policy">{t('i_agree_to')} <a
                            onClick={(e) => {
                              e.preventDefault()
                              navigate('/termcondition')
                            }} href="terms-conditions.html">{t('term_condition')}</a> {t('of_the_scheme')}</span>  </div>
                      </div>
                      <div className="button-bar full-btn">
                        <div className="button-bar-outer">
                          <div className="col">
                            <button onClick={(e) => {
                              e.preventDefault();
                              HandleRegister();
                            }} className="btn primary-btn">{t('submit')}</button>
                          </div>
                        </div>
                      </div>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
      </div >
      <Footer />
    </div >
  )
}
