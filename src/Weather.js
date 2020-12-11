import axios from "axios";
import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    function showForecast(response){
        setWeatherData ({
            ready: true,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            city: response.data.name,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            date: new Date(response.data.dt * 1000),
        });
    }

    if (weatherData.ready) {
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
          <img src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} class="main-img" alt="weather-icon" id="main-icon" />
        </div>
        <div class="col-6">
          <h1>
            <span id="degrees">{Math.round(weatherData.temperature)}</span>
            <span id="temperature"><a href=" " class="active" id="celsius">°C</a> | <a href=" " id="fahrenheit">°F</a></span>
          </h1>
          <h3 id="city">{weatherData.city}</h3>
          <h3 id="date"> <FormattedDate date={weatherData.date} /> </h3>
          <h3 id="weather" className="text-capitalize">{weatherData.description}</h3>
          <h3 id="humidity">Humidity: {weatherData.humidity}%</h3>
        </div>
      <div class="row days" id="forecast">
      </div>
     </div>
    </div>
 </div>
);
} else {
    const apiKey = "203da696788c9b8d29dc0497010394bf";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showForecast);

    return "Loading...";
    }
   
}