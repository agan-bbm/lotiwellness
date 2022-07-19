import React from "react";
import plan12month from "../../../components/Assets/12.png";
import plan6month from "../../../components/Assets/6.png";

import plan1month from "../../../components/Assets/1.png";
import { Steps } from "../Steps";

export function Stepsix({ nextStep, prevStep, handleFormData, values, step }) {
  const submitFormData = (e) => {
    e.preventDefault();

    nextStep();
  };

  return (
    <>
      <div className="signup-container">
        <Steps step={step}></Steps>

        <div className="step6 stepcontainer">
          <p>Tell us about yourself and we'll build the perfect box for you!</p>

          <h4>Choose Your Plan</h4>
          <p>
            Choose the plan best for you! Each box comes with self-care goodies
            & activities to help you discover your best self.
          </p>
          <div className="plainchoices">
            <div className="planch-div">
              <div className="plan-choice">
                <img src={plan12month} alt="plan12month" />
                <div className="subs-time">
                  <p>💝 12-Months 💝</p>
                </div>

                <div className="box-txt">
                  <p className="price-of-box">CAD $55.95/mo</p>
                  <p className="off-price-offer">50% off your first box</p>
                </div>
                <button
                  className="continue-btn plan-btn"
                  onClick={submitFormData}
                  type="submit"
                >
                  Subscribe today
                </button>
                <p className="mini-notice">
                  Subscribe to a month-to-month plan and receive a Loti Box
                  every month. No commitment required!
                </p>
              </div>
              <div className="offer-pink">
                <p>Save 10% per box</p>
              </div>
            </div>

            <div className="planch-div">
              {" "}
              <div className="plan-choice">
                <img src={plan6month} alt="plan6month" />
                <div className="subs-time">
                  <p>🎁 6-Months 🎁</p>
                </div>
                <div className="box-txt">
                  <p className="price-of-box">CAD $55.95/mo</p>
                  <p className="off-price-offer">50% off your first box</p>
                </div>
                <button
                  className="continue-btn plan-btn"
                  onClick={submitFormData}
                  type="submit"
                >
                  Subscribe today
                </button>
                <p className="mini-notice">
                  Save when you subscribe to a 6-month plan.
                </p>
              </div>
              <div className="offer-pink">
                <p>Save 10% per box</p>{" "}
              </div>
            </div>

            <div className="planch-div">
              <div className="plan-choice">
                <img src={plan1month} alt="plan1month" />
                <div className="subs-time">
                  <p>💝 Month-to-Month 💝</p>
                </div>
                <div className="box-txt">
                  <p className="price-of-box">CAD $55.95/mo</p>

                  <p className="off-price-offer"></p>
                </div>
                <button
                  className="continue-btn plan-btn"
                  onClick={submitFormData}
                  type="submit"
                >
                  Subscribe today
                </button>
              </div>
            </div>
          </div>

          <p>
            If you aren’t 100% satisfied with your Loti Box, we guarantee we’ll
            make it right. Boxes ship monthly between the 25th-31st. Plans
            automatically renew and you are committing to the length of your
            subscription plan. Cancellation Policy.{" "}
          </p>
        </div>

        <button className="prev-btn" onClick={prevStep}>
          prev
        </button>
      </div>
    </>
  );
}
