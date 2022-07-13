import React from "react";
import logo from "../Assets/logo.png";
import "./footer.css";

export function Footer() {
  return (
    <>
      <div className="footer sec-pad">
        <div className="footer-container container">
          <div className="footer-logo">
            <img src={logo} alt="" />
            <h6>Our Stores</h6>
            <p>
              Praesent sapien massa, convallis a pellentesque nec, egestas non
              nisi. Sed porttitor lectus nibh.
            </p>
          </div>
          <div className="footer-links">
            <div className="footer-link-div">
              <h6>About us</h6>

              <ul>
                <li>Our History</li>
                <li>Company Information</li>
                <li>Our Vision</li>
              </ul>
            </div>
            <div className="footer-link-div">
              <h6>Our Stores</h6>

              <ul>
                <li>Our History</li>
                <li>Company Information</li>
                <li>Our Vision</li>
              </ul>
            </div>
            <div className="footer-link-div">
              <h6>Customer Care</h6>

              <ul>
                <li>Our History</li>
                <li>Company Information</li>
                <li>Our Vision</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
