// src/TemperatureConverter.js

import React, { useState } from "react";
import "./Conversion.css";

function Conversion() {
  const [inputValue, setInputValue] = useState("");
  const [scale, setScale] = useState("Celsius");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setResult("");
    setError("");
  };

  const handleScaleChange = (e) => {
    setScale(e.target.value);
    setInputValue("");
    setResult("");
    setError("");
  };

  const convertToCelsius = () => {
    if (isNaN(inputValue)) {
      setError("Please enter a valid number");
      setResult("");
    } else {
      const celsius =
        scale === "Celsius"
          ? parseFloat(inputValue)
          : (parseFloat(inputValue) - 32) * (5 / 9);
      setResult(`${inputValue}°${scale} is equal to ${celsius.toFixed(2)}°C`);
      setError("");
    }
  };

  const convertToFahrenheit = () => {
    if (isNaN(inputValue)) {
      setError("Please enter a valid number");
      setResult("");
    } else {
      const fahrenheit =
        scale === "Fahrenheit"
          ? parseFloat(inputValue)
          : parseFloat(inputValue) * (9 / 5) + 32;
      setResult(
        `${inputValue}°${scale} is equal to ${fahrenheit.toFixed(2)}°F`
      );
      setError("");
    }
  };

  return (
    <div className="converter-container">
      <h1>Temperature Converter</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter temperature"
          value={inputValue}
          onChange={handleInputChange}
        />
        <select value={scale} onChange={handleScaleChange}>
          <option value="Celsius">Celsius</option>
          <option value="Fahrenheit">Fahrenheit</option>
        </select>
      </div>
      <div className="button-container">
        <button onClick={convertToCelsius}>Convert to Celsius</button>
        <button onClick={convertToFahrenheit}>Convert to Fahrenheit</button>
      </div>
      {error && <div className="error">{error}</div>}
      {result && <div className="result">{result}</div>}
    </div>
  );
}

export default Conversion;
