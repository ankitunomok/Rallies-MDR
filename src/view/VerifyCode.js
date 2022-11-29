import axios from 'axios';
import React from 'react'
import { asyncWrap } from '../asyncWrap';
import Footer from './Footer'
import Header from './Header'

export default function VerifyOtp() {

    const navigate = useNavigate();
    const [code, setCode] = useState("");
    let farmermobile = localStorage.getItem("registerMobile");
    let mobile = localStorage.getItem("loginMob");

    const VerifyOtp = async () => {
        const data = {
            phoneNumber: `+91${mobile}`,
            productId: "938",
            registrationCode: code,
            farmerMobileNumber: `+91${farmermobile}`
        };

        const config = {
            method: "post",
            url: "/validateRegistrationCode",
            data: data,
        };

        const [error, result] = await asyncWrap(axios(config));
        if (!result) {
            console.log(error);
            return;
        }
        if (result.data.status === "FAILURE") {
            alert(result.data.message);
            return;
        } else {
            alert(result.data.message);
            navigate("/home");
        }
    };

    return (
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
                                                                <input type="tel" className="form-control" placeholder="------" value={code} onChange={(e) => setCode(e.target.value)} />
                                                            </div>
                                                        </div>

                                                        <div className="resend-otp"> <span className="resend-otp-label"><span>Didn’t recieve OTP?</span><a href="" className="resend-link">RESEND OTP</a></span> </div>
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
