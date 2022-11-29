import React from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

export default function Home() {

  const navigate = useNavigate();
  const data = localStorage.getItem("homeData");
  // console.log(data)

  return (
    <div>
      <Header />

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

        <Footer />
      </div>
    </div>
  )
}
