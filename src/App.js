import React, { useState } from "react";
import Header from "./components/Header";
import CalculatorForm from "./components/CalculatorForm";
import Results from "./components/Results";
import "./App.css";

const App = () => {
  const [results, setResults] = useState(null);

  const calculateFootprint = (data) => {
    const electricity = data.electricity * 0.233;
    const gas = data.gas * 2.039;
    const water = data.water * 0.001;
    const waste = data.waste * 0.5;
    const total = electricity + gas + water + waste;

    setResults({ electricity, gas, water, waste, total });
  };

  return (
    <div className="app">
      <Header />
      <main>
        <CalculatorForm calculateFootprint={calculateFootprint} />
        {results && <Results results={results} />}
      </main>
    </div>
  );
};

export default App;
