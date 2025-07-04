import React, { useState, useEffect } from "react";
import "./index.css";

function TrafficLight() {
  const [intervals, setIntervals] = useState({
    red: 10,
    yellow: 5,
    green: 15,
  });

  const [light, setLight] = useState("red");
  const [timer, setTimer] = useState(intervals.red);

  useEffect(() => {
    setTimer(intervals[light]);
  }, [light, intervals]);

  useEffect(() => {
    if (timer <= 0) {
      if (light === "red") setLight("green");
      else if (light === "green") setLight("yellow");
      else setLight("red");
      return;
    }
    const id = setTimeout(() => setTimer(timer - 1), 1000);
    return () => clearTimeout(id);
  }, [timer, light]);

  const handleManual = (color) => {
    setLight(color);
    setTimer(intervals[color]);
  };

  const changeInterval = (color, delta) => {
    setIntervals((prev) => {
      let val = Math.max(1, prev[color] + delta);
      if (color === light) setTimer(val);
      return { ...prev, [color]: val };
    });
  };

  return (
    <div>
      <h1>Traffic Light</h1>
      <div className="traffic-container">
        <div className="traffic-box">
          <div className={`light ${light === "red" ? "red" : "inactive"}`}></div>
          <div className={`light ${light === "yellow" ? "yellow" : "inactive"}`}></div>
          <div className={`light ${light === "green" ? "green" : "inactive"}`}></div>
        </div>
        <div className="pole"></div>
      </div>
      <div style={{ margin: "20px 0" }}>
        <b>Current: {light.toUpperCase()} | Timer: {timer}s</b>
      </div>
      <div style={{ display: "flex", gap: 20, justifyContent: "center", marginBottom: 12 }}>
        {["red", "yellow", "green"].map((color) => (
          <div key={color} style={{ textAlign: "center" }}>
            <div style={{ marginBottom: 4, fontWeight: "bold" }}>
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </div>
            <div>
              <button onClick={() => changeInterval(color, 1)}>+</button>
              <span style={{ margin: "0 8px" }}>{intervals[color]}s</span>
              <button onClick={() => changeInterval(color, -1)}>-</button>
            </div>
            <button
              style={{ marginTop: 6 }}
              onClick={() => handleManual(color)}
            >
              {color.charAt(0).toUpperCase() + color.slice(1)} Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrafficLight;
