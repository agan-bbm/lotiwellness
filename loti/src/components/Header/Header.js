import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";

import "./header.css";

// IMAGES
import logo from "../Assets/logo.png";
export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [style, setStyle] = useState("cont");
  const handleToggle = () => {
    setOpen(false);
  };
  const changeStyle = () => {
    setStyle("fixed");
    setOpen(true);
  };
  const changeFixed = () => {
    setStyle("");
  };
  const button = () => {
    if (visible) {
      return (
        <button
          onClick={() => {
            setVisible(!visible);
            changeFixed();
          }}
          className="burger-icon"
        >
          <Hamburger toggled={isOpen} size={25} />
        </button>
      );
    } else {
      return (
        <button
          onClick={() => {
            setVisible(!visible);
            changeStyle();
          }}
          className="burger-icon"
        >
          <Hamburger toggle={setOpen} size={25} />
        </button>
      );
    }
  };
  return (
    <div>
      <div className="navbar-main-container">
        <div className="SvgLogo">
          <Link to="/" className="logo-link">
            {" "}
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <Link to="/" className="logo-link"></Link>
        <div className="navbar-links">
          <NavLink
            to="/pastboxes"
            className="white-links"
            style={({ isActive }) =>
              isActive
                ? {
                    borderBottom: "2px solid #003E53",
                    fontWeight: "500",
                  }
                : { color: "" }
            }
          >
            Past boxes
          </NavLink>

          <NavLink
            to="/login"
            className="white-links"
            style={({ isActive }) =>
              isActive
                ? {
                    borderBottom: "3px solid #003E53",
                    fontWeight: "500",
                  }
                : { color: "" }
            }
          >
            {" "}
            Log In
          </NavLink>
          <NavLink
            to="/signup"
            className="white-links"
            style={({ isActive }) =>
              isActive
                ? {
                    borderBottom: "3px solid #003E53",
                    fontWeight: "500",
                  }
                : { color: "" }
            }
          >
            {" "}
            Sign Up
          </NavLink>
        </div>

        {visible && (
          <div className="mobile-menu">
            <div className="SvgLogo" id="logomobile-burger">
              <NavLink
                to="/"
                className="logo-link"
                onClick={() => {
                  handleToggle();
                  setVisible(!visible);
                }}
              >
                <img src={logo} alt="logo" />
              </NavLink>
            </div>
            <div
              className="mobile-menu-div"
              onClick={() => {
                setVisible(!visible);
              }}
            >
              <p className="mobile-menu-link">
                <NavLink to="/pastboxes">Peek Inside</NavLink>
              </p>

              <p className="mobile-menu-link">
                <NavLink
                  onClick={() => {
                    handleToggle();
                    // changeFixed();
                  }}
                  to="/login"
                >
                  Log In
                </NavLink>
              </p>
              <p className="mobile-menu-link">
                <NavLink to="/signup">Sign Up</NavLink>
              </p>
            </div>
          </div>
        )}
        <div className="burger-icon-button">{button()}</div>
      </div>
    </div>
  );
}
