import React from "react";

export default function WeatherTemperatures(props) {
  return (
    <span className="WeatherTemperatures">
      <span className="temperature">
        <strong>{Math.round(props.celsius)}</strong>
      </span>
      <span className="unit">°C</span>
    </span>
  );
}
