import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (
    <div className="Weatherinfo">
        <div class="row">
            <div class="col-6">
            <img src={`https://openweathermap.org/img/wn/${props.data.icon}@2x.png`} class="main-img" alt="weather-icon" id="main-icon" />
            </div>
            <div class="col-6">
            <h1>
                <span id="degrees">{Math.round(props.data.temperature)}</span>
                <span id="temperature"><a href=" " class="active" id="celsius">°C</a> | <a href=" " id="fahrenheit">°F</a></span>
            </h1>
            <h3 id="city">{props.data.city}</h3>
            <h3 id="date"> <FormattedDate date={props.data.date} /> </h3>
            <h3 id="weather" className="text-capitalize">{props.data.description}</h3>
            <h3 id="humidity">Humidity: {props.data.humidity}%</h3>
            </div>
        <div class="row days" id="forecast">
        </div>
        </div>
    </div>
    )
}