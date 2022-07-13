import React from "react";

export function Stepsix({ nextStep, prevStep, handleFormData, values }) {
  const submitFormData = (e) => {
    e.preventDefault();

    nextStep();
  };

  return (
    <>
      <div className="step6">
        <h4>Choose Your Plan</h4>
        <p>
          Choose the plan best for you! Each box comes with self-care goodies &
          activities to help you discover your best self.
        </p>

        <div className="plan-choice">
          <p>12 MONTHS</p>
          <span className="price-of-box">CAD $55.95/mo</span>
          <span className="off-price-offer">50% off your first box</span>
          <button onClick={submitFormData} type="submit">
            Subscribe today
          </button>
          Subscribe to a month-to-month plan and receive a Loti Box every month.
          No commitment required!
        </div>

        <div className="plan-choice">
          <p>6 MONTHS</p>
          <button onClick={submitFormData} type="submit">
            Subscribe today
          </button>
          <span className="price-of-box">CAD $55.95/mo</span>
          <span className="off-price-offer">50% off your first box</span>
          Save when you subscribe to a 6-month plan.
        </div>

        <div className="plan-choice">
          <p>1 MONTH</p>
          <button onClick={submitFormData} type="submit">
            Subscribe today
          </button>
        </div>

        <p>
          If you aren’t 100% satisfied with your Loti Box, we guarantee we’ll
          make it right. Boxes ship monthly between the 25th-31st. Plans
          automatically renew and you are committing to the length of your
          subscription plan. Cancellation Policy.{" "}
        </p>
      </div>

      <button onClick={prevStep}>prev</button>
    </>
  );
}
