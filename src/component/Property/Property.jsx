import React from "react";
import "./Property.css";
import PropertyCard from "./PropertyCard";
import PropertyData from "./PropertyData";

const Property = () => {
  return (
    <div className="property">
      {PropertyData.map((val, ind) => {
        return (
          <PropertyCard
            key={ind}
            src={val.src}
            title={val.title}
            detail={val.detail}
          />
        );
      })}
    </div>
  );
};

export default Property;
