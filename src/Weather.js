import React from "react";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <WeatherInfo />
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
                  href="https://github.com/elinakostiainen/my-weather-react-app"
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
}
