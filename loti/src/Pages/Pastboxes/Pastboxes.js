import React from "react";
import benefit1 from "../../components/Assets/benefit1.png";
import benefit2 from "../../components/Assets/benefit2.png";
import benefit3 from "../../components/Assets/benefit3.png";
import "./pastboxes.css";
const mapp = [
  {
    title: "asd",
  },
  {
    title: "asd",
  },
  {
    title: "asd",
  },
  {
    title: "asd",
  },
  {
    title: "asd",
  },
  {
    title: "asd",
  },
  {
    title: "asd",
  },
  {
    title: "asd",
  },
  {
    title: "asd",
  },
  {
    title: "asd",
  },
  {
    title: "asd",
  },
  {
    title: "asd",
  },
  {
    title: "asd",
  },
  {
    title: "asd",
  },
  {
    title: "asd",
  },
  {
    title: "asd",
  },
  {
    title: "asd",
  },
  {
    title: "asd",
  },
  {
    title: "asd",
  },
  {
    title: "asd",
  },
];
const checkNum = (index, length) => {
  var checkPosition;
  if (index % 3 == 1 && index < Math.floor(length / 2)) {
    checkPosition = 1;
  } else if (index % 3 == 1 && index > Math.floor(length / 2) + 1) {
    checkPosition = 2;
  } else {
    checkPosition = 0;
  }
  return checkPosition;
};
export function Pastboxes() {
  return (
    <>
      <div className="container">
        <h2>What's In a Loti Box</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,
        </p>
        <h3>Get ready to eat well and train hard </h3>

        <div className="pastboxes-boxes">
          {mapp.map((single, i) => {
            return (
              <div
                className={
                  checkNum(i, mapp.length) == 1
                    ? "single-box upper"
                    : checkNum(i, mapp.length) == 2
                    ? "single-box under"
                    : "single-box"
                }
              >
                <img src={benefit1} alt="" />
                <h6>{single.title}</h6>
              </div>
            );
          })}
          {/* <div className="single-box">
            <img src={benefit1} alt="" />
            <h6>January</h6>
          </div>
          <div className="single-box">
            <img src={benefit2} alt="" />
            <h6>February</h6>
          </div>
          <div className="single-box">
            <img src={benefit3} alt="" />
            <h6>March</h6>
          </div>
          <div className="single-box">
            <img src={benefit1} alt="" />
            <h6>January</h6>
          </div>
          <div className="single-box">
            <img src={benefit2} alt="" />
            <h6>February</h6>
          </div>
          <div className="single-box">
            <img src={benefit3} alt="" />
            <h6>March</h6>
          </div>
          <div className="single-box">
            <img src={benefit1} alt="" />
            <h6>January</h6>
          </div>
          <div className="single-box">
            <img src={benefit2} alt="" />
            <h6>February</h6>
          </div>
          <div className="single-box">
            <img src={benefit3} alt="" />
            <h6>March</h6>
          </div>
          <div className="single-box">
            <img src={benefit1} alt="" />
            <h6>January</h6>
          </div>
          <div className="single-box">
            <img src={benefit2} alt="" />
            <h6>February</h6>
          </div>{" "}
          <div className="single-box">
            <img src={benefit2} alt="" />
            <h6>February</h6>
          </div>
          <div className="single-box">
            <img src={benefit3} alt="" />
            <h6>March</h6>
          </div>
          <div className="single-box">
            <img src={benefit2} alt="" />
            <h6>February</h6>
          </div>
          <div className="single-box">
            <img src={benefit2} alt="" />
            <h6>February</h6>
          </div> */}
        </div>
      </div>
    </>
  );
}
