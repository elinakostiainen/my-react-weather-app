import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  const apiKey = "97cba78db357d130b3618e974d3aed4a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="weather-app-wrapper">
            <div className="weather-app">
              <h1 placeholder="Brisbane">{weatherData.city}</h1>
              <div className="row">
                <div className="col-6">
                  <ul>
                    <li>Wednesday </li>
                    <li className="text-capitalize">
                      {weatherData.description}
                    </li>
                    <br />
                    <div className="weather-temperature">
                      <img
                        src="http://openweathermap.org/img/wn/02d@2x.png"
                        alt={weatherData.description}
                      />
                      <span className="temperature">
                        <strong>{Math.round(weatherData.temperature)}</strong>
                      </span>
                      <span className="unit">°C</span>
                    </div>
                  </ul>
                </div>
                <div className="col-6 extra-description">
                  <ul>
                    <li>Humidity: {weatherData.humidity}%</li>
                    <li>Wind: {weatherData.wind} km/hr</li>
                  </ul>
                </div>
              </div>
              <br />
              <hr />
              <br />
              <div className="search-city">
                <form>
                  <div className="row">
                    <div className="col-7">
                      <input
                        type="search"
                        placeholder="Enter a city..."
                        autoFocus="on"
                        autoComplete="off"
                        className="form-control"
                      />
                    </div>
                    <div className="col-2">
                      <button className="btn btn-dark" type="submit">
                        Search
                      </button>
                    </div>
                    <div className="col-1">
                      <button className="btn btn-dark">
                        <span role="img" aria-label="world">
                          🌍
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <footer>
              <p>
                <small>
                  <a
                    className="open-source-code"
                    href="https://github.com/elinakostiainen/my-react-weather-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open-source code
                  </a>{" "}
                  by Elina Kostiainen 👩🏽‍💻
                </small>
              </p>
            </footer>
          </div>
        </div>
      </div>
    );
  } else {
    return "Loading...";
  }
}
