import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-12">
          <div className="mb-2">
            29°
            <span className="min-temperature">22°</span>
          </div>
          <div>
            <WeatherIcon code={"01d"} size={34} />
          </div>
          <div className="forecast-day mt-1">
            <strong>Wed</strong>
          </div>
          <div className="small-description">cloudy</div>
        </div>
      </div>
    </div>
  );
}
