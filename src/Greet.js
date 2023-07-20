/** @format */

import React from "react";
import { useLocation } from "react-router-dom";
import "./App.css";

function Greet() {
  const loc = useLocation();
  let displayStr = `Hello ${loc.state.email} ,
   you have entered the password  ${loc.state.password}`;
  return (
    <div className="container">
      <p>{displayStr}</p>
    </div>
  );
}

export default Greet;
