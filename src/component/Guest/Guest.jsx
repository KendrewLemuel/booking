import React from "react";
import "./Guest.css";
import GuestCard from "./GuestCard";
import GuestData from "./GuestData";

const Guest = () => {
  return (
    <div className="guest">
      {GuestData.map((val, ind) => {
        return (
          <GuestCard
            key={ind}
            imgsrc={val.imgsrc}
            name={val.name}
            loc={val.loc}
            price={val.price}
            rate={val.rate}
            text={val.text}
          />
        );
      })}
    </div>
  );
};

export default Guest;
