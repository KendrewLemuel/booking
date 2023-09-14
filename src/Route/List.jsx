import React, { useState } from "react";
import Navbar from "../component/Navbar/Navbar";
import Header from "../component/Header/Header";
import "./List.css";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import Search from "../component/Search/Search";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <div className="bg-other">
        <Navbar />
        <Header type="list" />
      </div>

      <div className="list-container">
        <div className="list-wrapper">
          <div className="list-search">
            <h1 className="list-title">Search</h1>
            <div className="list-item">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="list-item">
              <label>Check in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "dd/MM/yyyy"
              )} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="list-item">
              <label>Options</label>
              <div className="list-optionWrapper">
                {" "}
                <div className="list-option">
                  <span className="list-optionText">
                    Min Price <small>per night</small>
                  </span>
                  <input type="number" className="list-optionInput" />
                </div>
                <div className="list-option">
                  <span className="list-optionText">
                    Max Price <small>per night</small>
                  </span>
                  <input type="number" className="list-optionInput" />
                </div>
                <div className="list-option">
                  <span className="list-optionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="list-optionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="list-option">
                  <span className="list-optionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="list-optionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="list-option">
                  <span className="list-optionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="list-optionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button className="btn">Search</button>
          </div>
          <div className="list-result">
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
