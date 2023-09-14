import React from "react";
import "./Search.css";
import SearchCard from "./SearchCard";
import SearchData from "./SearchData";

const Search = () => {
  return (
    <div className="si-all">
      {SearchData.map((val, ind) => {
        return (
          <SearchCard
            key={ind}
            src={val.src}
            title={val.title}
            distance={val.distance}
            taxi={val.taxi}
            sub={val.sub}
            feature={val.feature}
            cancel={val.cancel}
            cancelDetail={val.cancelDetail}
            siStar={val.siStar}
            price={val.price}
            tax={val.tax}
            btn={val.btn}
            siRate={val.siRate}
          />
        );
      })}
    </div>
  );
};

export default Search;
