import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Los Angeles" />
        <footer>
         Coded by Jenna Duncalf and {" "}
        <a href="https://github.com/jduncalf01/react-weather-app">open-sourced on GitHub</a>
      </footer>
    </div>
  </div>
  );
}

