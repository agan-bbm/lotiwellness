import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../Assets/logo.png";
import "./header.css";

export function Header(props) {
  let activeStyle = {
    color: "red",
  };

  let activeClassName = "underline";
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header-container">
            <div className="nav-logo">
              <NavLink to="/">
                <img src={logo} alt="" />
              </NavLink>
            </div>
            <div className="nav-lists">
              <ul>
                <NavLink
                  to="/pastboxes"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          borderBottom: "3px solid #58BADB",
                          fontWeight: "500",
                        }
                      : { color: "" }
                  }
                >
                  <li>PastBoxes</li>
                </NavLink>
                <li>Login</li>
                <NavLink to="/signup">
                  <li>
                    <button className="subscribe-btn">Get started</button>
                  </li>
                </NavLink>
              </ul>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
