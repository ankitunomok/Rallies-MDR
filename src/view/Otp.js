import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { asyncWrap } from '../asyncWrap';
import Footer from './Footer'
import Header from './Header'
import Home from './Home';

export default function Otp() {

  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [showHome, setShowHome] = useState("");
  const [data, setData] = useState("");
  let mobile = localStorage.getItem("loginMob");
  const mobileValidation = /^[0]?[6789]\d{9}$/;

  const VerifyOtp = async () => {
    const data = {
      phoneNumber: `+91${mobile}`,
      productId: "938",
      clientId: "283",
      OTP: otp
    };

    const config = {
      method: "post",
      url: "/validateOTP",
      data: data,
    };

    const [error, result] = await asyncWrap(axios(config));
    if (!result) {
      console.log(error);
      return;
    }
    if (result.data.code === 0) {
      alert(result.data.message);
      return;
    } else {
      // setData(result.data.result);
      localStorage.setItem("homeData", JSON.stringify(result.data.result));
      setShowHome(true);
      // navigate("/home");
    }
  };

  const ReSendOtp = async () => {
    if (!mobileValidation.test(mobile)) {
      alert("Please enter valid mobile number");
      navigate('/mobile')
      return;
    }

    const data = {
      phoneNumber: `+91${mobile}`,
      role: "MDR",
      resend: "1",
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
      navigate("/mobile");
    }
  }

  return (
    <>
      {
        showHome ? (
          <Home data={data} />
        ) : (
          <div>
            <Header />
            <div className="main-section">
              <div className="content-wrap register-wrap">
                <div className="content-wrap">
                  {/* <div className="container-fluid header">
                  <div className="row p-2">
                    <div className="col-6 logoSection">
                      <img src={require("../images/tata-logo.png")} className="img-fluid companylogo" alt="" />
    
                    </div>
                    <div className="col-6 text-right">
                      <img src={require("assets/images/logo.png")} className="img-fluid right_logo" alt="" />
                    </div>
                  </div>
                </div> */}
                  <div className="block register-content otp-form">
                    <div className="container">
                      <div className="tagline">
                        <h1 className="logo-tagline"> <br /> <div className="welcomeTxt"> </div> <span className="b-text">Validation<br />
                        </span></h1>
                      </div>
                      <div className="mobilePageContainer">
                        <div className="form-container">
                          <div className="form-wrap">
                            <div className="form-inner">
                              <form>

                                <div className="form">
                                  <div className="form-group">
                                    <label className="input-label">OTP</label>
                                    <div className="input-group">
                                      <input type="tel" className="form-control" placeholder="------" value={otp} onChange={(e) => setOtp(e.target.value)} />
                                    </div>
                                  </div>

                                  <div className="resend-otp"> <span className="resend-otp-label"><span>Didn’t recieve OTP?</span>
                                    <a onClick={(e) => {
                                      e.preventDefault();
                                      ReSendOtp();
                                    }} href="" className="resend-link">RESEND OTP</a></span> </div>
                                </div>
                                <div className="button-bar full-btn">
                                  <div className="button-bar-outer">
                                    <div className="col">
                                      <button onClick={(e) => {
                                        e.preventDefault();
                                        VerifyOtp();
                                      }} className="btn primary-btn">Submit</button>
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
              </div>
              <Footer />
            </div>
          </div>
        )
      }
    </>

  )
}
