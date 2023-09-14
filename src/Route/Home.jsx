import React from "react";
import Navbar from "../component/Navbar/Navbar";
import Header from "../component/Header/Header";
import Featured from "../component/Featured/Featured";
import "./Home.css";
import Property from "../component/Property/Property";
import Guest from "../component/Guest/Guest";
import Email from "../component/Email/Email";
import Footer from "../component/Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="background">
        <Navbar />
        <Header />
      </div>
      <div className="home-container">
        <Featured />
        <h1 className="home-title ">Searching by Category</h1>
        <Property />
        <h1 className="home-title ">Top Rated</h1>
        <Guest />
      </div>
      <Email />
      <Footer />
    </>
  );
};

export default Home;
