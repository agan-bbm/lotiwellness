import React from "react";

export function Stepfour({ nextStep, prevStep, handleFormData, values }) {
  const submitFormData = (e) => {
    e.preventDefault();

    nextStep();
  };

  return (
    <>
      <div className="step4">
        <label htmlFor="">Pick your favourite</label>
        <input
          type="checkbox"
          placeholder=" Natural bath
and body"
        />
        <input type="checkbox" placeholder="Natural skincare" />

        <input type="checkbox" placeholder=" Candles" />

        <input
          type="checkbox"
          placeholder=" Aromatherapy and
essential oils"
        />

        <input
          type="checkbox"
          placeholder=" Books and
journals"
        />
        <input
          type="checkbox"
          placeholder="Books and
journals"
        />

        <input type="checkbox" placeholder="Other" />
      </div>

      <button onClick={submitFormData} type="submit">
        Continue
      </button>
      <button onClick={prevStep}>prev</button>
    </>
  );
}
