import React from "react";
import { WeatherSvg } from "weather-icons-animated";
import "./index.css"

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "sunny",
    "clear-sky-night": "clear-night",
    "few-clouds-day": "partlycloudy",
    "few-clouds-night": "cloudy",
    "scattered-clouds-day": "partlycloudy",
    "scattered-clouds-night": "cloudy",
    "broken-clouds-day": "cloudy",
    "broken-clouds-night": "cloudy",
    "shower-rain-day": "rainy",
    "shower-rain-night": "rainy",
    "rain-day": "pouring",
    "rain-night": "pouring",
    "thunderstorm-day": "hail",
    "thunderstorm-night": "hail",
    "snow-day": "snowy",
    "snow-night": "snowy-rainy",
    "mist-day": "fog",
    "mist-night": "fog"
  }

  const iconState = codeMapping[props.code] || "sunny"; 
 

  return (
    <WeatherSvg state={iconState} width={props.width} height={props.height} />
  );
}