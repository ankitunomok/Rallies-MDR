import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

export default function PlaceholderIVR() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-12 mt-5 mb-5">
            <div className="tagline">
            </div>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-12">
            <div className="d-flex justify-content-center mb-4">
              <div className="card">

                <div className="card-body">
                  <h2> IVR call sent to Farmer's Mobile Number </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-3 mb-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <button onClick={(e) => {
              e.preventDefault()
              navigate('/home')
            }} className="button">Home Page </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
