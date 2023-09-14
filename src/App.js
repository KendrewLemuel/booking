import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Route/Home";
import List from "./Route/List";
import Hotel from "./Route/Hotel";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Hotel" element={<List />} />
      <Route path="/Hotel/:id" element={<Hotel />} />
    </Routes>
  );
};

export default App;
