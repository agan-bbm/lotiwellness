import React from "react";

export function Stepone({ nextStep, handleFormData, values }) {
  const submitFormData = (e) => {
    e.preventDefault();

    nextStep();
  };

  return (
    <>
      <div className="step1">
        <h5>Start by telling us who this is for</h5>
        <label htmlFor="name">What’s your name?</label>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          onChange={handleFormData("name")}
        />
      </div>

      <button type="submit" onClick={submitFormData}>
        Continue
      </button>
    </>
  );
}
