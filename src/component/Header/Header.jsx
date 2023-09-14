import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendar,
  faCar,
  faHotel,
  faLocationPin,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [calendar, setCalendar] = useState(false);
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOption, setOpenOption] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotel", { state: { destination, date, options } });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "header-container listMode" : "header-container"
        }
      >
        <div className="header-list">
          <div className="header-item active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="header-item">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="header-item">
            <FontAwesomeIcon icon={faCar} />
            <span>Car</span>
          </div>
          <div className="header-item">
            <FontAwesomeIcon icon={faHotel} />
            <span>Hotels</span>
          </div>
          <div className="header-item">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Taxi</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="header-title">Penginapan terbaik ada disini!</h1>
            <p className="header-desc">
              Dengan menggunakan Easy Hotel anda berkesempatan untuk mendapatkan
              banyak diskon menarik
            </p>

            <div className="header-search">
              <div className="header-searchItem">
                <FontAwesomeIcon icon={faLocationPin} />
                <input
                  className="header-searchInput"
                  type="text"
                  placeholder="Where you want to go "
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>

              <div className="header-searchItem">
                <FontAwesomeIcon icon={faCalendar} />
                <span
                  onClick={() => setCalendar(!calendar)}
                  className="header-searchText"
                >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}</span>
                {calendar && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>

              <div className="header-searchItem">
                <FontAwesomeIcon icon={faPerson} />
                <span
                  onClick={() => setOpenOption(!openOption)}
                  className="header-searchRoom"
                >{`${options.adult} adult 
            / ${options.children} children / ${options.room} room`}</span>
                {openOption && (
                  <div className="options">
                    <div className="option-items">
                      <span className="option-text">Adult</span>
                      <div className="option-wrapper">
                        <button
                          disabled={options.adult <= 1}
                          className="counter-btn"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="option-counter">{options.adult}</span>
                        <button
                          className="counter-btn"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="option-items">
                      <span className="option-text">Children</span>
                      <div className="option-wrapper">
                        <button
                          disabled={options.children <= 0}
                          className="counter-btn"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="option-counter">
                          {options.children}
                        </span>
                        <button
                          className="counter-btn"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="option-items">
                      <span className="option-text">Room</span>
                      <div className="option-wrapper">
                        <button
                          disabled={options.room <= 1}
                          className="counter-btn"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="option-counter">{options.room}</span>
                        <button
                          className="counter-btn"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="header-searchItem">
                <button className="btn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
