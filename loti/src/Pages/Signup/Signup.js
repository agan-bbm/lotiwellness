import React, { useState } from "react";
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
    goals: "",
    struggle: "",
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

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = (input) => (e) => {
    // input value from the form
    const { value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
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
          handleFormData={handleInputData}
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
