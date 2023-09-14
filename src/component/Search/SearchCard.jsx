import React from "react";
import "./Search.css";

const SearchCard = (props) => {
  return (
    <div className="si">
      <img src={props.src} className="si-img" />
      <div className="si-desc">
        <h1 className="si-title">{props.title}</h1>
        <span className="si-sub">{props.sub}</span>
        <span className="si-distance">{props.distance}</span>
        <span className="si-feature">{props.feature}</span>
        <span className="si-cancel">{props.cancel}</span>
        <span className="si-cancelDetail">{props.cancelDetail}</span>
      </div>
      <div className="si-detail">
        <div className="si-rate">
          <span>{props.siRate}</span>
          <button className="btn">{props.siStar}</button>
        </div>
        <div className="si-detailText">
          <span className="si-price">{props.price}</span>
          <span className="si-tax">{props.tax}</span>
          <button className="btn">{props.btn}</button>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
