import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import { Rings } from "react-loader-spinner";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      coordinates: response.data.coord,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "97cba78db357d130b3618e974d3aed4a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="weather-app-wrapper">
            <div className="weather-app">
              <WeatherInfo data={weatherData} />
              <WeatherForecast coordinates={weatherData.coordinates} />
              <br />
              <div className="search-city">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-7">
                      <input
                        type="search"
                        placeholder="Enter a city..."
                        autoFocus="on"
                        autoComplete="off"
                        className="form-control"
                        onChange={handleCityChange}
                      />
                    </div>
                    <div className="col-2">
                      <button className="btn btn-dark search" type="submit">
                        Search
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
    search();
    return <Rings color="#ddc3fc" height={600} width={800} />;
  }
}
