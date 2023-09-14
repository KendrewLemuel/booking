import React, { useState } from "react";
import "./Hotel.css";
import Navbar from "../component/Navbar/Navbar";
import Header from "../component/Header/Header";
import Email from "../component/Email/Email";
import Footer from "../component/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Hotel = () => {
  const [slide, setSlide] = useState(0);
  const [open, setOpen] = useState(false);
  const photo = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlide(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlide;

    if (direction === "l") {
      newSlide = slide === 0 ? 5 : slide - 1;
    } else {
      newSlide = slide === 5 ? 0 : slide + 1;
    }

    setSlide(newSlide);
  };
  return (
    <>
      <Navbar />
      <Header type="list" />
      <div className="hotel-container">
        {open && (
          <div className="hotel-slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close-btn"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="slider-wrapper">
              <div className="slider-img">
                <img src={photo[slide].src} alt="" />
              </div>
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotel-wrapper">
          <button className="btn">Book now!</button>
          <div className="hotel-title">
            <h1>Hotel abcs</h1>
          </div>
          <div className="hotel-address">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Greenbay Pluit Jakarta Utara</span>
          </div>
          <span className="hotel-distance">Best location 1km from PIK</span>
          <span className="hotel-price">
            Book now and you can reschedule anytime!
          </span>

          <div className="hotel-imgs">
            {photo.map((photo, i) => (
              <div className="hotel-imgWrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotel-img"
                />
              </div>
            ))}
          </div>
          <div className="hotel-detail">
            <div className="hotel-detailText">
              <h1 className="hotel-title">Best fully furnish Apartment</h1>
              <p className="hotel-desc">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32.
              </p>
            </div>
            <div className="hotel-detailPrice">
              <h1>Book now and get Discount</h1>
              <span>
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections 1.10.32 and
                1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
                reproduced in their exact original form, accompanied by English
                versions from the 1914 translation by H. Rackham.
              </span>
              <h2>
                <b>$123</b>/night
              </h2>
              <button className="btn">Book now!</button>
            </div>
          </div>
        </div>
      </div>
      <Email />
      <Footer />
    </>
  );
};

export default Hotel;
