import React from "react";

export function Stepthree({ nextStep, prevStep, handleFormData, values }) {
  const submitFormData = (e) => {
    e.preventDefault();

    nextStep();
  };

  return (
    <>
      <div className="step3">
        <label htmlFor="">
          What do you struggle with most in terms of self-care?
        </label>
        <input type="checkbox" placeholder=" Lack of Motivation" />
        <input type="checkbox" placeholder="Lack of Time" />

        <input
          type="checkbox"
          placeholder=" Feeling Guilty About
        Spending Money"
        />

        <input type="checkbox" placeholder=" Don't Know What To Do" />

        <input type="checkbox" placeholder=" Not Worthy of Self-care" />
      </div>
      <button onClick={submitFormData} type="submit">
        Continue
      </button>
      <button onClick={prevStep}>prev</button>
    </>
  );
}
