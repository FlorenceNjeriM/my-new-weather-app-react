import React from "react";
import { WeatherSvg } from "weather-icons-animated";

export default function WeatherIcon (props){
    const codeMapping = {
        "01d": "sunny",
        "01n": "clear-night",
        "02d": "partly-cloudy",
        "02n": "cloudy",
        "03d": "partly-cloudy",
        "03n": "cloudy",
        "04d": "cloudy",
        "04n": "cloudy",
        "09d": "rainy",
        "09n": "rainy",
        "10d": "pouring",
        "10n": "pouring",
        "11d": "hail",
        "11n": "hail",
        "13d": "snowy",
        "13n": "snowy-rainy",
        "50d": "fog",
        "50n": "fog",
      };

        return (<WeatherSvg state={codeMapping[props.code]} width={70} height={70}/> )

}