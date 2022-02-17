import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    return days[day];
  }

  function description() {
    let description = props.data.weather[0].main.toLowerCase();

    return `${description}`;
  }

  return (
    <div className="WeatherForecastDay">
      <div className="mb-2">
        {maxTemperature()}
        <span className="min-temperature">{minTemperature()}</span>
      </div>
      <div>
        <WeatherIcon code={props.data.weather[0].icon} size={34} />
      </div>
      <div className="forecast-day mt-1">
        <strong>{day()}</strong>
      </div>
      <div className="small-description">{description()}</div>
    </div>
  );
}
