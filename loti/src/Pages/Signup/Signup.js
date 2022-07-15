import React, { useState } from "react";

import "./signup.css";
import { Stepsix } from "./steps/Stepsix";
import { Stepfive } from "./steps/Stepfive";
import { Stepfour } from "./steps/Stepfour";
import { Stepone } from "./steps/Stepone";
import { Stepthree } from "./steps/Stepthree";
import { Steptwo } from "./steps/Steptwo";

function Signup(props) {
  //state for steps
  const [step, setstep] = useState(1);

  //state for form data
  const [formData, setFormData] = useState({
    name: "",
    goals: [],
    struggle: [],
    favourite: "",
    email: "",
    plan: "",
  });

  console.log(formData);

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };
  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };
  const handleInputData = (e, isGoals = false, f, isStruggle = false) => {
    const index = formData.goals.findIndex((item) => item === e.target.value);

    const newArray = [...formData.goals];
    if (index !== -1) {
      newArray.splice(index, 1);
    } else {
      newArray.push(e.target.value);
    }
    isGoals
      ? setFormData((prevState) => ({
          ...prevState,
          goals: newArray,
        }))
      : setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
  };

  const handleStruggleData = (e, isStruggle = false) => {
    const index = formData.struggle.findIndex(
      (item) => item === e.target.value
    );

    const newArray2 = [...formData.struggle];
    if (index !== -1) {
      newArray2.splice(index, 1);
    } else {
      newArray2.push(e.target.value);
    }
    isStruggle
      ? setFormData((firstState) => ({
          ...firstState,
          struggle: newArray2,
        }))
      : setFormData((firstState) => ({
          ...firstState,
          [e.target.name]: e.target.value,
        }));
  };

  // javascript switch case to show different form in each step
  switch (step) {
    case 1:
      return (
        <Stepone
          nextStep={nextStep}
          handleFormData={handleInputData}
          values={formData}
        />
      );
    case 2:
      return (
        <Steptwo
          nextStep={nextStep}
          prevStep={prevStep}
          handleFormData={handleInputData}
          values={formData}
        />
      );

    case 3:
      return (
        <Stepthree
          nextStep={nextStep}
          prevStep={prevStep}
          handleFormData={handleStruggleData}
          values={formData}
        />
      );
    case 4:
      return (
        <Stepfour
          nextStep={nextStep}
          prevStep={prevStep}
          handleFormData={handleInputData}
          values={formData}
        />
      );
    case 5:
      return (
        <Stepfive
          nextStep={nextStep}
          prevStep={prevStep}
          handleFormData={handleInputData}
          values={formData}
        />
      );
    case 6:
      return (
        <Stepsix
          nextStep={nextStep}
          prevStep={prevStep}
          handleFormData={handleInputData}
          values={formData}
        />
      );
    // default case to show nothing
    default:
      return <div className="App"></div>;
  }
}
export default Signup;
