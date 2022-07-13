import React from "react";

export function Steptwo({ nextStep, prevStep, handleFormData, values }) {
  const submitFormData = (e) => {
    e.preventDefault();

    nextStep();
  };
  return (
    <>
      <div className="step2">
        <h5>What are your self-care goals?</h5>
        <label htmlFor="name">What’s your name?</label>
        <input
          type="checkbox"
          placeholder=" I love self-care. I can't get enough!"
          value="love"
          onChange={handleFormData("goals")}
        />
        <input
          type="checkbox"
          placeholder="I want to discover
new self-care products."
          value="discover"
          onChange={handleFormData("goals")}
        />

        <input
          type="checkbox"
          placeholder=" I need help with
self-care and wellness"
          value="wellness"
          onChange={handleFormData("goals")}
        />

        <input
          type="checkbox"
          placeholder=" I want to reduce anxiety
and increase happiness"
          value="anxiety"
          onChange={handleFormData("goals")}
        />

        <input
          type="checkbox"
          placeholder=" I know someone who will
love this subscription!"
          value="gift"
          onChange={handleFormData("goals")}
        />
      </div>
      <button onClick={submitFormData} type="submit">
        Continue
      </button>

      <button onClick={prevStep}>prev</button>
    </>
  );
}
