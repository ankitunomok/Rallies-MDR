import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footerlogo">
        <img
          src={require("../images/footer-loogo.png")}
          className="img-fluid "
          alt=""
        />
      </div>

      <div className="footerright">
        <p>
          <a href="tel:+918108622210" onClick={(e) => e.preventDefault()}>
            {" "}
            <img
              src={require("../images/phone.png")}
              className="img-fluid "
              alt=""
            />{" "}
            8108622210{" "}
          </a>{" "}
          | <a href="mailto:cmc@rallis.com">cmc@rallis.com </a>
        </p>
        <p>Monday to Friday- 9.30am to 5.30pm</p>
      </div>
    </footer>
  );
}
