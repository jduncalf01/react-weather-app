import React from "react";
import WeatherForecastIcon from "./WeatherForecastIcon";
import "./Weather.css";

export default function WeatherForecastPreview(props) {
    function hours() {
        let date = new Date(props.data.dt * 1000)
        let hours = date.getHours()
        return `${hours}:00`;
    }

    function temperature() {
       let temperature = Math.round(props.data.main.temp)
       return `${temperature}°C`;
    }

    return (
    <div class="WeatherForecastPreview days col" id="forecast">
        {hours()}
        <WeatherForecastIcon code={props.data.weather[0].icon} />
        {temperature()}
    </div>
)
}