import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
    <div className="Weatherinfo">
        <div class="row">
            <div class="col-6">
            <img src={`https://openweathermap.org/img/wn/${props.data.icon}@2x.png`} class="main-img" alt="weather-icon" id="main-icon" />
            </div>
            <div class="col-6">
            <h1>
                <WeatherTemperature celsius={props.data.temperature} />
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