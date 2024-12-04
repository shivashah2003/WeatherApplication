import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/shivashah2003/WeatherApplication.git">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank">
          Shiva Kumar
        </a>{" "}
      </div>
    </React.Fragment>
  );
}

export default App;
