import React from "react";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York" />
    </div>
  );
}
