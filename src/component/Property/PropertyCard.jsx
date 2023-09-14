import React from "react";
import "./Property.css";

const Property = (props) => {
  return (
    <div className="property">
      <div className="property-items">
        <img className="property-img" src={props.src} alt="" />
        <div className="property-title">
          <h2>{props.title}</h2>
          <h4>{props.detail}</h4>
        </div>
      </div>
    </div>
  );
};

export default Property;
