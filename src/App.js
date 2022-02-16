import React from "react";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York" />
    </div>
  );
}
