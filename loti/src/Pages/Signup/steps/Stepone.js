import React from "react";
export function Stepone({ nextStep, handleFormData, values }) {
  const submitFormData = (e) => {
    e.preventDefault();

    nextStep();
  };

  return (
    <>
      <div className="signup-container">
        <div className="step1 stepcontainer">
          <p>Tell us about yourself and we'll build the perfect box for you!</p>

          <h5>Start by telling us who this is for</h5>
          <div className="input-container">
            <label htmlFor="name">What’s your name?</label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              onChange={handleFormData}
              required
            />
          </div>
        </div>
        <div className="signup-buttons">
          <button
            className="continue-btn"
            type="submit"
            onClick={submitFormData}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
}
