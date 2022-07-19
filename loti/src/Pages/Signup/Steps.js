import React from "react";
import step1 from "../../components/Assets/su-step1.png";
import step2 from "../../components/Assets/su-step2.png";
import step3 from "../../components/Assets/su-step3.png";
import step4 from "../../components/Assets/su-step4.png";
import step5 from "../../components/Assets/su-step5.png";
import step6 from "../../components/Assets/su-step6.png";

export function Steps(step) {
  console.log(step);
  switch (step.step) {
    case 1:
      return (
        <div className="su-icons step1agan">
          <img src={step1} alt="" />
        </div>
      );

    case 2:
      return (
        <div className="su-icons">
          <img src={step2} alt="" />
        </div>
      );

    case 3:
      return (
        <div className="su-icons">
          <img src={step3} alt="" />
        </div>
      );
    case 4:
      return (
        <div className="su-icons">
          <img src={step4} alt="" />
        </div>
      );
    case 5:
      return (
        <div className="su-icons">
          <img src={step5} alt="" />
        </div>
      );
    case 6:
      return (
        <div className="su-icons">
          <img src={step6} alt="" />
        </div>
      );
    // default case to show nothing
    default:
      return (
        <div className="App">
          <p>sun po marr steps</p>
        </div>
      );
  }
}
