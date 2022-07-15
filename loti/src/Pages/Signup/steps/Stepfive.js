import React from "react";

export function Stepfive({ nextStep, prevStep, handleFormData, values }) {
  const submitFormData = (e) => {
    e.preventDefault();

    nextStep();
  };

  return (
    <>
      <div className="signup-container">
        <div className="step5 stepcontainer">
          <p>Tell us about yourself and we'll build the perfect box for you!</p>
          <h5>What’s your Email address?</h5>
          <div className="input-container">
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email address"
            />
            <div className="agree-to-terms">
              <input id="agree-chckbx" type="checkbox" />{" "}
              <span id="agree-terms">
                By clicking you agree to our Terms and Privacy Policy.
              </span>
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
