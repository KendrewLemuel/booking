import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-container">
          <a href="/">
            <span className="navbar-logo">
              <FontAwesomeIcon
                icon={faBuildingCircleCheck}
                className="logo-icon"
              />
              easy.com
            </span>
          </a>
          <div className="navbar-menu">
            <button className="btn">Register</button>
            <button className="btn">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
