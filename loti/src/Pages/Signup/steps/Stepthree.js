import React from "react";
import Ellipse1 from "../../../components/Assets/Ellipse1.png";

import Ellipse2 from "../../../components/Assets/Ellipse2.png";

import Ellipse4 from "../../../components/Assets/Ellipse4.png";

import Ellipse3 from "../../../components/Assets/Ellipse3.png";

import Ellipse5 from "../../../components/Assets/Ellipse5.png";
import { Steps } from "../Steps";

export function Stepthree({
  nextStep,
  prevStep,
  handleStruggleData,
  handleFormData,
  values,
  setstepactive,
  step,
}) {
  const submitFormData = (e) => {
    e.preventDefault();

    nextStep();
  };
  console.log(setstepactive);
  return (
    <>
      <div className="signup-container">
        <Steps step={step}></Steps>

        <div className="step3 stepcontainer">
          <p>Tell us about yourself and we'll build the perfect box for you!</p>

          <h5> What do you struggle with most in terms of self-care?</h5>

          <div className="struggles-group">
            <div className="struggle">
              <label>
                <input
                  type="radio"
                  name="Motivation"
                  value="Motivation"
                  onChange={(e) => handleFormData(e, true)}
                />
                <img src={Ellipse1} alt="ellipse1" />
                <p>Lack of Motivation</p>
              </label>
            </div>
            <div className="struggle">
              <label>
                <input
                  type="radio"
                  placeholder="Lack of Time"
                  name="Time"
                  value="Time"
                  onChange={(e) => handleFormData(e, true)}
                />
                <img src={Ellipse2} alt="ellipse2" />
                <p>Lack of Time</p>
              </label>
            </div>
            <div className="struggle">
              <label>
                <input
                  type="radio"
                  placeholder=" Feeling Guilty About
        Spending Money"
                  name="Money"
                  value="Money"
                  onChange={(e) => handleFormData(e, true)}
                />

                <img src={Ellipse3} alt="ellipse3" />
                <p>Feeling Guilty About Spending Moneyn</p>
              </label>
            </div>
            <div className="struggle">
              <label>
                <input
                  type="radio"
                  placeholder=" Don't Know What To Do"
                  name="whattodo"
                  value="whattodo"
                  onChange={(e) => handleFormData(e, true)}
                />
                <img src={Ellipse4} alt="ellipse4" />
                <p>Don't Know What To Do</p>
              </label>
            </div>
            <div className="struggle">
              <label>
                <input
                  type="radio"
                  placeholder=" Not Worthy of Self-care"
                  name="notworthy"
                  value="notworthy"
                  onChange={(e) => handleFormData(e, true)}
                />
                <img src={Ellipse5} alt="ellipse5" />
                <p>Not Worthy of Self-care</p>
              </label>
            </div>
          </div>
        </div>
        <div className="signup-buttons">
          <button
            className="continue-btn"
            onClick={submitFormData}
            type="submit"
          >
            Continue
          </button>
          <button className="prev-btn" onClick={prevStep}>
            prev
          </button>
        </div>
      </div>
    </>
  );
}
