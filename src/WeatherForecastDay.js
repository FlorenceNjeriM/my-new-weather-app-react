import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    function forecastDay() {
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }

    function maxTemperature() {
        let temp = Math.round(props.data.temperature.maximum);
        return `${temp}°`
    }

    function minTemperature() {
        let temp = Math.round(props.data.temperature.minimum);
        return `${temp}°`
    }


    return (
        <div>
            <div className="WeatherForecast-day">{forecastDay()}
            </div>
            <div className="WeatherForecast-icon"><WeatherIcon code={props.data.condition.icon} width={75} height={75} /></div>
            <div className="WeatherForecast-temperature"> <span className="temp-max">{maxTemperature()}</span> <span className="temp-min">{minTemperature()}</span>
            </div>
        </div>
    )
}