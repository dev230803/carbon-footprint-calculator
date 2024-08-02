import React, { useState } from "react";
import "./CalculatorForm.css";
const CalculatorForm = ({ calculateFootprint }) => {
  const [formData, setFormData] = useState({
    electricity: "",
    gas: "",
    water: "",
    waste: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateFootprint(formData);
  };

  return (
    <form className="calculator-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="electricity">Electricity (kWh)</label>
        <input
          type="number"
          id="electricity"
          name="electricity"
          value={formData.electricity}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="gas">Gas (cubic meters)</label>
        <input
          type="number"
          id="gas"
          name="gas"
          value={formData.gas}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="water">Water (liters)</label>
        <input
          type="number"
          id="water"
          name="water"
          value={formData.water}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="waste">Waste (kg)</label>
        <input
          type="number"
          id="waste"
          name="waste"
          value={formData.waste}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="calculate-btn">
        Calculate
      </button>
    </form>
  );
};

export default CalculatorForm;
