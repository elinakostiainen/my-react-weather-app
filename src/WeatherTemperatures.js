import React, { useState } from "react";

export default function WeatherTemperatures(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span className="WeatherTemperatures">
        <span className="temperature">
          <strong>{Math.round(props.celsius)}</strong>
        </span>
        <span className="unit">
          °C |
          <a href="/" rel="norefer" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;

    return (
      <span className="WeatherTemperatures">
        <span className="temperature">
          <strong>{Math.round(fahrenheit)}</strong>
        </span>
        <span className="unit">
          <a href="/" rel="norefer" onClick={showCelsius}>
            °C
          </a>
          | °F
        </span>
      </span>
    );
  }
}
