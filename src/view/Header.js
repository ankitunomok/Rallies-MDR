import React from "react";

export default function Header() {
  return (
    <header className="customeheader">
      <div className="container">
        <div className="row">
          <div style={{ marginTop: "30px" }} className="logoSection">
            <img
              src={require("../images/tata-logo.png")}
              className="img-fluid companylogo"
              alt=""
            />
            <img
              src={require("../images/dhaanya-logo.png")}
              className="img-fluid dhaanyalogo"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="headerRight"></div>
    </header>
  );
}
