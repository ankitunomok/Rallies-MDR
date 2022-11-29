import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { asyncWrap } from '../asyncWrap';
import Footer from './Footer'
import Header from './Header'

export default function Mobile() {

    const [mobile, setMobile] = useState("");

    const navigate = useNavigate();
    const mobileValidation = /^[0]?[6789]\d{9}$/;

    const SendOtp = async () => {
        if (!mobileValidation.test(mobile)) {
            alert("Please enter valid mobile number");
            return;
        }

        localStorage.setItem("loginMob", mobile);
        const data = {
            phoneNumber: `+91${mobile}`,
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
            navigate("/mobile");
        } else {
            navigate("/otp");
        }
    }

    return (
        <div>
            <Header />
            <div className="main-section">
                <div className="content-wrap">
                    <div className="content-wrap  register-wrap">
                        <div className="container-fluid header">
                            <div className="col-6 logoSection">
                                <div className="languagedrop">
                                    <select className="form-controlNew" name="language">
                                        <option value>English</option>
                                        <option value>Hindi</option>
                                        <option value>Marathi</option>
                                        <option value>Gujarati</option>
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
                                <span className="b-text">Login
                                    <br />
                                    <br /></span></h1>
                        </div>
                        <div className="block mobilePageContainer otp-form">



                            <div className="form-container">
                                <div className="form-wrap">
                                    <div className="form-inner">
                                        <form>

                                            <div className="form">
                                                <div className="form-group">
                                                    <label className="input-label">Mobile No *</label>
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
                                                            <button onClick={(e) => {
                                                                e.preventDefault();
                                                                SendOtp();
                                                            }} className="btn primary-btn">Get OTP</button>
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
                </div >
                <Footer />
            </div >
        </div >
    )
}