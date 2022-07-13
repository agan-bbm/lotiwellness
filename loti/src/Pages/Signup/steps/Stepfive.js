import React from "react";

export function Stepfive({ nextStep, prevStep, handleFormData, values }) {
  const submitFormData = (e) => {
    e.preventDefault();

    nextStep();
  };

  return (
    <>
      <div className="step5">
        <label htmlFor="">What’s your Email address?</label>
        <input type="email" placeholder="Enter your email address" />
        <input type="checkbox" />{" "}
        <span>By clicking you agree to our Terms and Privacy Policy.</span>
      </div>

      <button onClick={submitFormData} type="submit">
        Continue
      </button>
      <button onClick={prevStep}>prev</button>
    </>
  );
}
