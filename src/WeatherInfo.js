import React from "react";

export default function WeatherInfo() {
  return (
    <div className="WeatherInfo">
      <h1 placeholder="Brisbane">Brisbane</h1>
      <div className="row">
        <div className="col-6">
          <ul>
            <li>Wednesday </li>
            <li>Rainy</li>
            <br />
            <div className="weather-temperature">
              <img
                src="http://openweathermap.org/img/wn/02d@2x.png"
                alt="description"
              ></img>
              <span className="temperature">
                <strong>10</strong>
              </span>
              <span className="unit">°C</span>
            </div>
          </ul>
        </div>
        <div className="col-6 extra-description">
          <ul>
            <li>Humidity: 10%</li>
            <li>Wind: 5 km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
