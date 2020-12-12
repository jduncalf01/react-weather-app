import axios from "axios";
import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
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

    function search() {
        const apiKey = "203da696788c9b8d29dc0497010394bf";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(showForecast);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
 return (
    <div className="Weather">  
        <div class="container">
         <div class="form">
             <form onSubmit={handleSubmit} class="form-inline" id="cityForm">
                <div class="form-group mx-sm-3 mb-2 city-field">
                  <input
                     type="search"
                     class="form-control shadow-sm"
                    id="inputPassword2"
                     placeholder="Enter a city"
                     size="40"
                     onChange={handleCityChange}
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
        <WeatherInfo data={weatherData} />
        <WeatherForecast city={weatherData.city} />
    </div>
 </div>
);
} else {
    search();
    return "Loading...";
    }
}