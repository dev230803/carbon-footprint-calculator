import React from "react";
import "./Results.css";
const Results = ({ results }) => (
  <div className="results">
    <h2>Results</h2>
    <p>Electricity: {results.electricity} kg CO2</p>
    <p>Gas: {results.gas} kg CO2</p>
    <p>Water: {results.water} kg CO2</p>
    <p>Waste: {results.waste} kg CO2</p>
    <p>Total: {results.total} kg CO2</p>
  </div>
);

export default Results;
