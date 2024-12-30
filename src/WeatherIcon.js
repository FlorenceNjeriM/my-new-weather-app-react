import React from "react";
import { WeatherSvg } from "weather-icons-animated";

export default function WeatherIcon (props){
    const codeMapping = {
        "01d": "sunny",
        "01n": "clear-night",
        "02d": "partly-cloudy",
        "02n": "cloudy",
        "03d": "clouds",
        "03n": "cloudy",
        "04d": "cloudy",
        "04n": "cloudy",
        "09d": "rainy",
        "09n": "rainy",
        "10d": "pouring",
        "10n": "hail",
        "11d": "lightning",
        "11n": "lightning-rainy",
        "13d": "snowy",
        "13n": "snowy-rainy",
        "50d": "mist",
        "50n": "fog",
      };
const weatherState= codeMapping[props.code]

      

        return (<WeatherSvg state= {weatherState}  width={props.width} height={props.height}/> )

}