import React from "react";
import "./Featured.css";

const FeaturedCard = (props) => {
  return (
    <div className="featured-item">
      <img className="featured-img" src={props.img} alt="" />
      <div className="featured-title">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
};

export default FeaturedCard;
