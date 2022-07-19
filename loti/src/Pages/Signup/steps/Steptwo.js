import React, { useState } from "react";

import Ellipse1 from "../../../components/Assets/Ellipse1.png";

import Ellipse2 from "../../../components/Assets/Ellipse2.png";

import Ellipse4 from "../../../components/Assets/Ellipse4.png";

import Ellipse3 from "../../../components/Assets/Ellipse3.png";

import Ellipse5 from "../../../components/Assets/Ellipse5.png";
import { Steps } from "../Steps";

export function Steptwo({
  nextStep,
  prevStep,
  handleFormData,
  values,
  goals,
  step,
  setstepactive,
}) {
  const submitFormData = (e) => {
    e.preventDefault();

    nextStep();
  };
  console.log(setstepactive);

  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    // 👇️ toggle
    setIsActive((current) => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };

  return (
    <>
      <div className="signup-container">
        <Steps step={step}></Steps>

        <div className="step2 stepcontainer">
          <p>Tell us about yourself and we'll build the perfect box for you!</p>
          <h5>What are your self-care goals?</h5>
          <div className="struggles-group">
            <div
              className="struggle"
              style={{
                backgroundColor: isActive ? "salmon" : "",
                color: isActive ? "white" : "",
              }}
              onClick={handleClick}
            >
              <label>
                <input
                  type="checkbox"
                  placeholder=" I love self-care. I can't get enough!"
                  value="enough"
                  name="enough"
                  required
                  onChange={(e) => handleFormData(e, true)}
                />

                <img src={Ellipse2} alt="ellipse2" />
                <p>Lack of Time</p>
              </label>
            </div>
            <div className="struggle">
              <label>
                <input
                  type="checkbox"
                  placeholder="I want to discover
new self-care products."
                  value="discover"
                  required
                  name="discover"
                  onChange={(e) => handleFormData(e, true)}
                />
                <img src={Ellipse2} alt="ellipse2" />
                <p>Lack of Time</p>
              </label>
            </div>
            <div className="struggle">
              <label>
                <input
                  type="checkbox"
                  placeholder=" I need help with
self-care and wellness"
                  value="wellness"
                  name="wellness"
                  onChange={(e) => handleFormData(e, true)}
                />
                <img src={Ellipse2} alt="ellipse2" />
                <p>Lack of Time</p>
              </label>
            </div>
            <div className="struggle">
              <label>
                <input
                  type="checkbox"
                  placeholder=" I want to reduce anxiety
and increase happiness"
                  name="anxiety"
                  value="anxiety"
                  onChange={(e) => handleFormData(e, true)}
                />
                <img src={Ellipse2} alt="ellipse2" />
                <p>Lack of Time</p>
              </label>
            </div>
            <div className="struggle">
              {" "}
              <label>
                <input
                  type="checkbox"
                  placeholder=" I know someone who will
love this subscription!"
                  name="love"
                  value="love"
                  id="love"
                  onChange={(e) => handleFormData(e, true)}
                />
                <img src={Ellipse2} alt="ellipse2" />
                <p>Lack of Time</p>
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
