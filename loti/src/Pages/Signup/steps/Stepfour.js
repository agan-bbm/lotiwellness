import React from "react";
import naturalbath from "../../../components/Assets/naturalbath'.png";
import naturalskincare from "../../../components/Assets/naturalskincare.png";

import candles from "../../../components/Assets/candles.png";

import oils from "../../../components/Assets/oils.png";

import books from "../../../components/Assets/books.png";
import journals from "../../../components/Assets/journals.png";

export function Stepfour({ nextStep, prevStep, handleFormData, values }) {
  const submitFormData = (e) => {
    e.preventDefault();

    nextStep();
  };

  return (
    <>
      <div className="signup-container">
        <div className="step4 stepcontainer">
          <p>Tell us about yourself and we'll build the perfect box for you!</p>

          <h5>Pick your favourite</h5>
          <div className="favorites">
            <div className="onefav">
              <div className="of-div">
                <input
                  type="checkbox"
                  placeholder=" Natural bath
and body"
                />{" "}
                <p> Natural bath and body</p>
                <img src={naturalbath} alt="naturalbath" />
              </div>
            </div>
            <div className="onefav">
              {" "}
              <div className="of-div">
                <input type="checkbox" placeholder="Natural skincare" />{" "}
                <p> Natural skincare</p>
                <img src={naturalskincare} alt="naturalskincare" />
              </div>
            </div>

            <div className="onefav">
              <div className="of-div">
                <input type="checkbox" placeholder=" Candles" />

                <p> Candles</p>

                <img src={candles} alt="candles" />
              </div>
            </div>
            <div className="onefav">
              {" "}
              <div className="of-div">
                <input
                  type="checkbox"
                  placeholder=" Aromatherapy and
essential oils"
                />{" "}
                <p> Aromatherapy and essential oils</p>
                <img src={oils} alt="oils" />
              </div>
            </div>

            <div className="onefav">
              {" "}
              <div className="of-div">
                <input
                  type="checkbox"
                  placeholder=" Books and
journals"
                />{" "}
                <p> Books and journals</p>
                <img src={books} alt="books" />
              </div>
            </div>
            <div className="onefav">
              <div className="of-div">
                <input type="checkbox" placeholder="Books and journals" />

                <p> Books and journals</p>

                <img src={journals} alt="journals" />
              </div>
            </div>
          </div>
          <div className="onefav">
            <div className="of-div-other">
              <input type="checkbox" placeholder="Other" />
              <p>Other</p>
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
