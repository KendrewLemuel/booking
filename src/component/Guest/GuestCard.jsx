import React from "react";
import "./Guest.css";

const GuestCard = (props) => {
  return (
    <div className="guest">
      <div className="guest-items">
        <img className="guest-img" src={props.imgsrc} alt="" />
        <span className="guest-name">{props.name}</span>
        <span className="guest-loc">{props.loc}</span>
        <span className="guest-price">{props.price}</span>
        <div className="guest-rate">
          <button className="">{props.rate}</button>
          <span>{props.text}</span>
        </div>
      </div>
    </div>
  );
};

export default GuestCard;
