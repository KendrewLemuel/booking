import React from "react";
import "./Email.css";

const Email = () => {
  return (
    <div className="email-wrapper">
      <div className="email">
        <h1 className="email-title">Save time Save money!</h1>
        <span className="email-desc">Sign up for the newest updates </span>
        <div className="email-container">
          <input type="text" placeholder="Input your email here" />
          <button className="btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Email;
