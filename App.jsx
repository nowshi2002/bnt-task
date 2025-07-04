import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import TextTransformer from "./TextTransformer";
import StarRating from "./StarRating";
import TelephoneFormatter from "./Phone";
import TrafficLight from "./TrafficLight";
import "./styles.css";
import "./index.css";
import Password from "./Password";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/text-transform" element={<TextTransformer />} />
          <Route path="/star-rating" element={<StarRating />} />
          <Route path="/telephone" element={<TelephoneFormatter />} />
          <Route path="/traffic" element={<TrafficLight />} />
          <Route path="/password" element={<Password />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default  App
