import React, { useState } from "react";

export default function WeatherTemperatures(props) {
  const [unit, setUnit] = useState("celsuis");

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
      <div className="WeatherTemperatures">
        <span className="temperature">
          <strong>{Math.round(props.celsius)}</strong>
        </span>
        <span className="unit">
          °C |
          <a href="/" rel="norefer" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;

    return (
      <div className="WeatherTemperatures">
        <span className="temperature">
          <strong>{Math.round(fahrenheit)}</strong>
        </span>
        <span className="unit">
          <a href="/" rel="norefer" onClick={showCelsius}>
            °C
          </a>
          | °F
        </span>
      </div>
    );
  }
}
