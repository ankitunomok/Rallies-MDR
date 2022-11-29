import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Home() {

  const navigate = useNavigate();
  const data = localStorage.getItem("homeData");
  // console.log(data)

  return (
    <div>
      <header className="customeheader">
        <div className="container">
          <div className="row">
            <div className="logoSection">
              <img src={require("../images/tata-logo.png")} className="img-fluid companylogo" alt="" />
              <img src={require("../images/dhaanya-logo.png")} className="img-fluid dhaanyalogo" alt="" />
            </div>

          </div>
        </div>
        <div className="headerRight"></div>
      </header>

      <div className="main-section">

        <div className="container mt-5 mb-5">

          <div className="row">
            <div className="col-md-12 mt-5 mb-5">

              <div className="tagline">
                <h1 className="logo-tagline">  <div className="welcomeTxt"> Welcome</div> <span className="b-text">to Dhaanya Farmer<br />
                  Campaign</span></h1>
              </div>

            </div>
            <div className="col-6 col-md-3 col-sm-6 mb-4">
              <div className="card text-center">
                <div className="card-header bg-orange">
                  Overall Target
                </div>
                <div className="card-body">
                  <h3>{data ? data.totalTarget : ""}</h3>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3 col-md-3 col-sm-6 mb-4">
              <div className="card text-center">
                <div className="card-header bg-orange">
                  Overall Achieved
                </div>
                <div className="card-body">
                  <h3>{data ? data.targetAchived : ""}</h3>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 col-sm-6 mb-4">
              <div className="card text-center">
                <div className="card-header bg-orange">
                  Day Target
                </div>
                <div className="card-body">
                  <h3>{data ? data.dailyTarget : ""}</h3>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 col-sm-6 mb-4">
              <div className="card text-center">
                <div className="card-header bg-orange">
                  Day Achieved
                </div>
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
              <button onClick={(e) => {
                e.preventDefault();
                navigate('/register')
              }} className="btn primary-btn">Register Farmer</button>
            </div>
          </div>
        </div>

        <footer>
          <div className="footerlogo">
            <img src={require("../images/footer-loogo.png")} className="img-fluid" alt="" />
          </div>

          <div className="footerright">

            <p>
              <a href="#"> <img src={require("../images/phone.png")} className="img-fluid " alt="" /> 8108622210 </a> | <a href="#">cmc@rallis.com </a>
            </p>
            <p>
              Monday to Friday- 9.30am to 5.30pm
            </p>

          </div>
        </footer>
      </div>
    </div>
  )
}
