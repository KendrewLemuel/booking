import React from "react";
import "./Featured.css";
import FeaturedData from "./FeaturedData";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
  return (
    <div className="featured ">
      {FeaturedData.map((val, ind) => {
        return <FeaturedCard key={ind} img={val.img} title={val.title} />;
      })}
    </div>
  );
};

export default Featured;
