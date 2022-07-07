import React from "react";
import "./homepage.css";
import rightone from "../../components/Assets/rightone.png";
import righttwo from "../../components/Assets/righttwo.png";
import featuredon from "../../components/Assets/featured.png";
import step1 from "../../components/Assets/step1.png";

import step2 from "../../components/Assets/step2.png";

import step3 from "../../components/Assets/step3.png";
import prod1 from "../../components/Assets/prod1.png";
import prod2 from "../../components/Assets/prod2.png";

import prod3 from "../../components/Assets/prod3.png";
import getlti from "../../components/Assets/getloti.png";
export function Homepage() {
  return (
    <>
      <div className="firstsection">
        <div className="mainsection">
          <h1>
            Unbox happiness,<br></br>
            every month.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </p>
          <button className="subscribe-btn">Subscribe now</button>
        </div>
        <div className="rightsection">
          <img src={rightone} alt="" />
          <img src={righttwo} alt="" />
        </div>
      </div>

      <div className="secondsection">
        <div className="featuredon">
          <h5>Featured On</h5>
          <img src={featuredon} alt="" />
        </div>
        <div className="sec-unbox">
          <h2>
            Unbox happiness, <br></br>
            every month
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </p>

          <div className="sec-steps">
            <div className="sec-single-step">
              <img src={step1} alt="step1" />
              <h4>Subscribe to Loti</h4>
              <p>
                Start your wellness journey & get a a new self-care kit
                delivered to your home every month! Starting from CAD $47.95 per
                box
              </p>
            </div>
            <div></div>
            <div className="sec-single-step">
              <img src={step2} alt="step2" />
              <h4>Subscribe to Loti</h4>
              <p>
                Start your wellness journey & get a a new self-care kit
                delivered to your home every month! Starting from CAD $47.95 per
                box
              </p>
            </div>
            <div></div>
            <div className="sec-single-step">
              <img src={step3} alt="step3" />
              <h4>Subscribe to Loti</h4>
              <p>
                Start your wellness journey & get a a new self-care kit
                delivered to your home every month! Starting from CAD $47.95 per
                box
              </p>
            </div>
          </div>
          <button className="subscribe-btn">Subscribe now</button>
        </div>
      </div>

      <div className="thirdsection">
        <div className="singleProd">
          <img src={prod1} alt="prod1" />
          <h3>Lavender body lotion</h3>
          <p>Find out more</p>
        </div>
        <div className="singleProd">
          <img src={prod2} alt="prod2" />
          <h3>Lavender body lotion</h3>
          <p>Find out more</p>
        </div>
        <div className="singleProd">
          <img src={prod3} alt="prod3" />
          <h3>Lavender body lotion</h3>
          <p>Find out more</p>
        </div>
        <div className="singleProd">
          <img src={prod2} alt="prod4" />
          <h3>Lavender body lotion</h3>
          <p>Find out more</p>
        </div>
      </div>

      <div className="fourthsection">
        <h2>Benefits of Loti Wellness</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,
        </p>
        <div className="benefits-tabs">
          <div className="benefit-card" id="benefit1">
            <div className="hidden">
              <h5>Boxes come monthly</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </p>
            </div>
          </div>
          <div className="benefit-card" id="benefit2">
            <div className="hidden">
              <h5>Boxes come monthly</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </p>
            </div>
          </div>
          <div className="benefit-card" id="benefit3">
            <div className="hidden">
              <h5>Boxes come monthly</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="fifthsection">
        <div className="fifth-images">
          <img src={getlti} alt="" />
        </div>
        <div className="fifth-text">
          <h3>
            Get Your Loti Box <br></br> Today!
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </p>
          <button className="subscribe-btn">Susbscribe now</button>
        </div>
      </div>

      <div className="testimonials">
        <h2>Hear what our customers have to say</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,
        </p>
      </div>

      <div className="subscribe">
        <div className="giftbox-btn">
          <h3>Get a gift box</h3>
          <button>Get a giftbox</button>
        </div>
        <div className="subscribe-input">
          <h6>LET'S TALK</h6>
          <h3>Our newsletter!</h3>
          <div className="input">
            <input type="text" placeholder="Enter your email here " />
            <button className="subscribe-btn">Sign Up</button>
          </div>
        </div>
      </div>
    </>
  );
}
