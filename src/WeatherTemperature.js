import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState(`celsius`);
    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === 'celsius') {
    return (
    <div class="WeatherTemperature">
        <span id="degrees">{Math.round(props.celsius)}</span>
        <span id="temperature">°C | <a href=" " onClick={showFahrenheit} id="fahrenheit">°F</a></span>
    </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9/5) + 32;
    return (
        <div class="WeatherTemperature">
            <span id="degrees">{Math.round(fahrenheit)}</span>
            <span id="temperature"> <a href=" " onClick={showCelsius} class="active" id="celsius">°C</a> | °F</span>
        </div>
    );
  }
}