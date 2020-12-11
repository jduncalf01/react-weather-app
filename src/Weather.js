import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
    <div className="Weather">  
        <div class="container">
         <div class="form">
             <form class="form-inline" id="cityForm">
                <div class="form-group mx-sm-3 mb-2 city-field">
                  <input
                     type="search"
                     class="form-control shadow-sm"
                    id="inputPassword2"
                     placeholder="Enter a city"
                     size="40"
                    />
                 </div>
             <button type="submit" class="btn btn-primary mb-2 shadow-sm">
                Search
            </button>
            <button
                type="submit"
                class="btn btn-primary mb-2 shadow-sm"
                id="currentLocation">
                Current Location
            </button>
            </form>
        </div>
      <div class="row">
        <div class="col-6">
          <img src="" class="main-img" alt="weather-icon" id="main-icon" />
        </div>
        <div class="col-6">
          <h1>
            <span id="degrees">88</span>
            <span id="temperature"><a href="#" class="active" id="celsius">°C</a> | <a href="#" id="fahrenheit">°F</a></span>
          </h1>
          <h3 id="city">Los Angeles</h3>
          <h3 id="date">Friday, 11:45am</h3>
          <h3 id="weather">Sunny</h3>
          <h3 id="humidity">Humidity: 10%</h3>
        </div>
      <div class="row days" id="forecast">
      </div>
     </div>
    </div>
 </div>
);
}